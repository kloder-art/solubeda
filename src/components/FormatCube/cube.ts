import {
  Color,
  DoubleSide,
  Group,
  Material,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  TextureLoader,
} from 'three';

const createMaterial = (images: Array<any>) => {
  return images.map((image) => {
    if (image === null) {
      return false;
    }
    const tex = new TextureLoader().load(
      image.image.childImageSharp.gatsbyImageData.images.fallback.src
    );
    return new MeshBasicMaterial({
      transparent: true,
      side: DoubleSide,
      color: new Color(0xffffff),
      map: tex,
      opacity: 1,
    });
  });
};

export function createCube(
  [w, h, d]: Array<number>,
  images: Array<any>
): THREE.Group {
  const materials = createMaterial(images);
  const group = new Group();

  // Construct the cube with planes because in the BoxGeometry there is a
  // problem with doubleSide and transparency

  // Right
  const geomRight = new PlaneGeometry(d, h);
  const meshRight = new Mesh(geomRight, materials[0] as Material);
  meshRight.position.x = w / 2;
  meshRight.rotation.y = Math.PI / 2;
  group.add(meshRight);
  // Left
  const geomLeft = new PlaneGeometry(w, h);
  const meshLeft = new Mesh(geomLeft, materials[1] as Material);
  meshLeft.position.x = -w / 2;
  meshLeft.rotation.y = -Math.PI / 2;
  group.add(meshLeft);
  // Top
  const geomTop = new PlaneGeometry(w, d);
  const meshTop = new Mesh(geomTop, materials[2] as Material);
  meshTop.position.y = h / 2;
  meshTop.rotation.x = Math.PI / 2;
  group.add(meshTop);
  // Bottom
  const geomBottom = new PlaneGeometry(w, d);
  const meshBottom = new Mesh(geomBottom, materials[3] as Material);
  meshBottom.position.y = -h / 2;
  meshBottom.rotation.x = -Math.PI / 2;
  group.add(meshBottom);
  // Front
  const geomFront = new PlaneGeometry(w, h);
  const meshFront = new Mesh(geomFront, materials[4] as Material);
  meshFront.position.z = d / 2;
  group.add(meshFront);
  // Back
  const geomBack = new PlaneGeometry(w, h);
  const meshBack = new Mesh(geomBack, materials[5] as Material);
  meshBack.position.z = -d / 2;
  group.add(meshBack);

  return group;
}
