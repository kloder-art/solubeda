import { BoxGeometry, Color, Group, Mesh, MeshBasicMaterial } from 'three';

const createMaterial = () =>
  new MeshBasicMaterial({
    color: new Color(0x666666),
  });

export function createGuides([w, h, d]: Array<number>) {
  const material = createMaterial();
  const group = new Group();

  // Right
  const sideRight = createSide([w, h, d], material);
  sideRight.position.x = w / 2;
  group.add(sideRight);
  // Left
  const sideLeft = createSide([w, h, d], material);
  sideLeft.position.x = -w / 2;
  group.add(sideLeft);
  // Back
  const sideBack = createSide([w, h, d], material);
  sideBack.position.z = -d / 2;
  sideBack.rotation.y = Math.PI / 2;
  group.add(sideBack);
  // Front
  const sideFront = createSide([w, h, d], material);
  sideFront.position.z = d / 2;
  sideFront.rotation.y = Math.PI / 2;
  group.add(sideFront);

  return group;
}

const createSide = ([_w, h, d]: Array<number>, material: any) => {
  // Top
  const group = new Group();
  const geomTop = new BoxGeometry(0.5, 1, d + 0.5);
  const meshTop = new Mesh(geomTop, material);
  meshTop.position.y = h / 2 - 0.25;
  group.add(meshTop);
  // Bottom
  const geomBottom = new BoxGeometry(0.5, 1, d + 0.5);
  const meshBottom = new Mesh(geomBottom, material);
  meshBottom.position.y = -h / 2 + 0.25;
  group.add(meshBottom);
  // Left
  const geomLeft = new BoxGeometry(0.5, h + 0.5, 1);
  const meshLeft = new Mesh(geomLeft, material);
  meshLeft.position.z = d / 2 - 0.25;
  group.add(meshLeft);
  // Right
  const geomRight = new BoxGeometry(0.5, h + 0.5, 1);
  const meshRight = new Mesh(geomRight, material);
  meshRight.position.z = -d / 2 + 0.25;
  group.add(meshRight);
  return group;
};
