import * as React from 'react';
import { Group, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { ArtworkClose } from '../ArtworkClose';

import { createCube } from './cube';
import { createGuides } from './guides';
import { StyledContainer } from './StyledContainer';
import { parse, getLargest } from './dimensions';

type FormatCubeProps = {
  data: { frontmatter: { dimensions: string } };
  images: unknown[];
  returnPage: string;
};

export const FormatCube: React.FC<FormatCubeProps> = ({
  data,
  images,
  returnPage,
}) => {
  const mountRef = React.useRef<HTMLDivElement>(null);
  const dimensions = parse(data.frontmatter.dimensions);
  const maxDimension = getLargest(dimensions);

  const sceneRef = React.useRef<Scene>(new Scene());
  const rendererRef = React.useRef<WebGLRenderer>(
    new WebGLRenderer({ antialias: true, alpha: true })
  );
  const cameraRef = React.useRef<PerspectiveCamera>();
  const controlsRef = React.useRef<OrbitControls>();
  const cubeRef = React.useRef<Group>();
  let frameId: number;

  const onWindowResize = () => {
    const camera = cameraRef.current as PerspectiveCamera;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    renderScene();
  };

  const animate = () => {
    const controls = controlsRef.current as OrbitControls;
    const cube = cubeRef.current as Group;
    cube.rotation.y += 0.001;
    controls.update();
    renderScene();
    frameId = window.requestAnimationFrame(animate);
  };

  const renderScene = () => {
    const camera = cameraRef.current as PerspectiveCamera;
    rendererRef.current.render(sceneRef.current as Scene, camera);
  };

  const start = () => {
    if (!frameId) {
      frameId = requestAnimationFrame(animate);
    }
  };

  const stop = () => {
    cancelAnimationFrame(frameId);
  };

  React.useEffect(() => {
    const mount = mountRef.current as HTMLDivElement;
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    cameraRef.current = new PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    // Almost the double of the larger cube dimension
    cameraRef.current.position.z = maxDimension * 1.2;

    // Renderer
    rendererRef.current.setClearColor(0x000000, 0);
    rendererRef.current.setSize(width, height);
    mount.appendChild(rendererRef.current.domElement);

    // Controls
    // controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = new OrbitControls(
      cameraRef.current,
      rendererRef.current.domElement
    );
    controlsRef.current.enabled = true;
    controlsRef.current.maxDistance = 1500;
    controlsRef.current.minDistance = 0;

    // Geometry
    cubeRef.current = createCube(dimensions, images);
    cubeRef.current.add(createGuides(dimensions));

    // Put all together
    sceneRef.current.add(cubeRef.current);
    controlsRef.current.update();
    renderScene();
    start();

    window.addEventListener('resize', onWindowResize, false);
    return () => {
      window.removeEventListener('resize', onWindowResize, false);
      stop();
      if (mount) {
        mount.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <>
      <ArtworkClose url={returnPage} />
      <StyledContainer ref={mountRef} />
    </>
  );
};
