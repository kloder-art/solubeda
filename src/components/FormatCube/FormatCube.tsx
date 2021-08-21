import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { ArtworkClose } from '../ArtworkClose';

import { createCube } from './cube';
import { createGuides } from './guides';
import { StyledContainer } from './StyledContainer';
import { parse, getLargest } from './dimensions';

let mount = null;

export const FormatCube = ({ data, images, returnPage }) => {
  const dimensions = parse(data.frontmatter.dimensions);
  const maxDimension = getLargest(dimensions);

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let controls: OrbitControls;
  let cube: THREE.Group;
  let frameId: number;

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

  useEffect(() => {
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    // Almost the double of the larger cube dimension
    camera.position.z = maxDimension * 1.2;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Controls
    // controls = new OrbitControls(camera, renderer.domElement);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = true;
    controls.maxDistance = 1500;
    controls.minDistance = 0;

    // Geometry
    cube = createCube(dimensions, images);
    cube.add(createGuides(dimensions));

    // Put all together
    scene.add(cube);
    controls.update();
    renderScene();
    start();

    window.addEventListener('resize', onWindowResize, false);
    return () => {
      window.removeEventListener('resize', onWindowResize, false);
      stop();
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <ArtworkClose url={returnPage} />
      <StyledContainer ref={(m: boolean) => (mount = m)} />
    </>
  );
};
