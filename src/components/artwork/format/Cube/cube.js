import * as THREE from 'three';

const createMaterial = (images) => {
  return images.map(image => {
    if (image.path === false) {return false;}
    const tex = new THREE.TextureLoader().load(image.path);
    return new THREE.MeshBasicMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      color: new THREE.Color(0xffffff),
      map: tex,
      opacity: 1,
      shading: THREE.SmoothShading,
    });
  });
};

export function createCube([w, h, d], images) {
  const materials = createMaterial(images);
  const group = new THREE.Group();

  // Construct the cube with planes because in the BoxGeometry there is a
  // problem with doubleSide and transparency

  // Right
  const geomRight = new THREE.PlaneGeometry(d, h);
  const meshRight =  new THREE.Mesh(geomRight, materials[0]);
  meshRight.position.x = w/2;
  meshRight.rotation.y = Math.PI/2;
  group.add(meshRight);
  // Left
  const geomLeft = new THREE.PlaneGeometry(w, h);
  const meshLeft =  new THREE.Mesh(geomLeft, materials[1]);
  meshLeft.position.x = -w/2;
  meshLeft.rotation.y = -Math.PI/2;
  group.add(meshLeft);
  // Top
  const geomTop = new THREE.PlaneGeometry(w, d);
  const meshTop =  new THREE.Mesh(geomTop, materials[2]);
  meshTop.position.y = h/2;
  meshTop.rotation.x = Math.PI/2;
  group.add(meshTop);
  // Bottom
  const geomBottom = new THREE.PlaneGeometry(w, d);
  const meshBottom =  new THREE.Mesh(geomBottom, materials[3]);
  meshBottom.position.y = -h/2;
  meshBottom.rotation.x = -Math.PI/2;
  group.add(meshBottom);
  // Front
  const geomFront = new THREE.PlaneGeometry(w, h);
  const meshFront =  new THREE.Mesh(geomFront, materials[4]);
  meshFront.position.z = d/2;
  group.add(meshFront);
  // Back
  const geomBack = new THREE.PlaneGeometry(w, h);
  const meshBack =  new THREE.Mesh(geomBack, materials[5]);
  meshBack.position.z = -d/2;
  group.add(meshBack);

  return group;
}
