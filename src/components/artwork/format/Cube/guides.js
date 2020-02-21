import * as THREE from 'three';

const createMaterial = () => {
  return new THREE.MeshBasicMaterial( {
    color: new THREE.Color(0x666666)
  });
};

export function createGuides([w, h, d]) {
  const material = createMaterial();
  const group = new THREE.Group();
  
  // Right
  const sideRight = createSide([w, h, d], material);
  sideRight.position.x = w/2;
  group.add(sideRight);
  // Left
  const sideLeft = createSide([w, h, d], material);
  sideLeft.position.x = -w/2;
  group.add(sideLeft);
  // Back
  const sideBack = createSide([w, h, d], material);
  sideBack.position.z = -d/2;
  sideBack.rotation.y = Math.PI/2;
  group.add(sideBack);
  // Front
  const sideFront = createSide([w, h, d], material);
  sideFront.position.z = d/2;
  sideFront.rotation.y = Math.PI/2;
  group.add(sideFront);
  
  return group;
}

const createSide = ([w, h, d], material) => {
  // Top
  const group = new THREE.Group();
  const geomTop = new THREE.BoxBufferGeometry(.5, 1, d + .5);
  const meshTop = new THREE.Mesh(geomTop, material);
  meshTop.position.y = h/2 - .25;
  group.add(meshTop);
  // Bottom
  const geomBottom = new THREE.BoxBufferGeometry(.5, 1, d + .5);
  const meshBottom = new THREE.Mesh(geomBottom, material);
  meshBottom.position.y = -h/2 + .25;
  group.add(meshBottom);
  // Left
  const geomLeft = new THREE.BoxBufferGeometry(.5, h + .5, 1);
  const meshLeft = new THREE.Mesh(geomLeft, material);
  meshLeft.position.z = d/2 - .25;
  group.add(meshLeft);
  // Right
  const geomRight = new THREE.BoxBufferGeometry(.5, h + .5, 1);
  const meshRight = new THREE.Mesh(geomRight, material);
  meshRight.position.z = -d/2 + .25;
  group.add(meshRight);
  return group;
};
