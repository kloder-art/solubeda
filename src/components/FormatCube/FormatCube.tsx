import * as React from 'react';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { ArtworkClose } from '../ArtworkClose';

import { createCube } from './cube';
import { createGuides } from './guides';
import { StyledCanvas } from './StyledContainer';
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
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const dimensions = parse(data.frontmatter.dimensions);
  const maxDimension = getLargest(dimensions);

  React.useEffect(() => {
    let frameId: number;
    const canvas = canvasRef.current as HTMLCanvasElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // Renderer
    const renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);

    // Scene
    const scene = new Scene();

    // Camera
    const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
    // Almost the double of the larger cube dimension
    camera.position.z = maxDimension * 1.2;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = true;
    controls.maxDistance = 1500;
    controls.minDistance = 0;

    // Geometry
    const cube = createCube(dimensions, images);
    cube.add(createGuides(dimensions));

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderScene();
    };

    const animate = () => {
      cube.rotation.y += 0.001;
      controls.update();
      renderScene();
      frameId = window.requestAnimationFrame(animate);
    };

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
    };

    // Put all together
    scene.add(cube);
    controls.update();
    renderScene();
    start();

    window.addEventListener('resize', onWindowResize, false);
    return () => {
      window.removeEventListener('resize', onWindowResize, false);
      stop();
    };
  }, []);

  return (
    <>
      <ArtworkClose url={returnPage} />
      <StyledCanvas ref={canvasRef} />
    </>
  );
};
