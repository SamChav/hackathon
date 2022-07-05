//divs and appendages
const body = document.body;
body.classList.add("body");
const box1 = document.createElement("div");
box1.classList.add("box1");
const box2 = document.createElement("div");
box2.classList.add("box2");
const box3 = document.createElement("div");
const box4 = document.createElement("div");
const box5 = document.createElement("div");
const box6 = document.createElement("div");
document.body.append(box1);
document.body.append(box2);
document.body.append(box3);
document.body.append(box4);
document.body.append(box5);
document.body.append(box6);

//button
// const button1 = document.createElement("button");
// button1.classList.add("button1")
// box1.append(button1)

//scene 1
const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera(
  160,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer1 = new THREE.WebGLRenderer();
renderer1.setSize(350, 150);
box1.appendChild(renderer1.domElement);

const geometry1 = new THREE.SphereGeometry(15, 32, 16);
const material1 = new THREE.MeshBasicMaterial({ color: 0xfe3838 });
const sphere1 = new THREE.Mesh(geometry1, material1);
scene1.add(sphere1);
camera1.position.z = 16;

//scene 2
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer2 = new THREE.WebGLRenderer();
renderer2.setSize(350, 150);
box2.appendChild(renderer2.domElement);

const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshBasicMaterial({ color: 0x01fb1d });
const sphere2 = new THREE.Mesh(geometry2, material2);
scene2.add(sphere2);
camera2.position.z = 5;

//scene 3
const scene3 = new THREE.Scene();
const camera3 = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer3 = new THREE.WebGLRenderer();
renderer3.setSize(350, 150);
box3.appendChild(renderer3.domElement);

const geometry3 = new THREE.RingGeometry(15, 32, 16);
const material3 = new THREE.MeshBasicMaterial({
  color: 0xd3fb01,
  side: THREE.DoubleSide,
});
const sphere3 = new THREE.Mesh(geometry3, material3);
scene3.add(sphere3);
camera3.position.z = 105;

//scene 4
const scene4 = new THREE.Scene();
const camera4 = new THREE.PerspectiveCamera(
  120,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer4 = new THREE.WebGLRenderer();
renderer4.setSize(350, 150);
box4.appendChild(renderer4.domElement);

const geometry4 = new THREE.TetrahedronGeometry(20, 1);
const material4 = new THREE.MeshBasicMaterial({ color: 0xfd5cff });
const sphere4 = new THREE.Mesh(geometry4, material4);
scene4.add(sphere4);
camera4.position.z = 25;

//scene 5
const scene5 = new THREE.Scene();
const camera5 = new THREE.PerspectiveCamera(
  120,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer5 = new THREE.WebGLRenderer();
renderer5.setSize(350, 150);
box5.appendChild(renderer5.domElement);

const geometry5 = new THREE.TorusGeometry(10, 3, 16, 100);
const material5 = new THREE.MeshBasicMaterial({ color: 0xf4f4f4 });
const sphere5 = new THREE.Mesh(geometry5, material5);
scene5.add(sphere5);
camera5.position.z = 15;

//scene 6
const scene6 = new THREE.Scene();
const camera6 = new THREE.PerspectiveCamera(
  160,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer6 = new THREE.WebGLRenderer();
renderer6.setSize(350, 150);
box6.appendChild(renderer6.domElement);

const geometry6 = new THREE.SphereGeometry(15, 32, 16);
const material6 = new THREE.MeshBasicMaterial({ color: 0xfa8400 });
const sphere6 = new THREE.Mesh(geometry6, material6);
scene6.add(sphere6);
camera6.position.z = 16;

//want to convert this to play a sound corresponding to a clicked shape

body.addEventListener("keypress", (event) => {
  if (event.key == 1) {
    alert("1");
  } else if (event.key == 2) {
    alert("2");
  } else if (event.key == 3) {
    alert("3");
  } else if (event.key == 4) {
    alert("4");
  } else if (event.key == 5) {
    alert("5");
  } else if (event.key == 6) {
    alert("6");
  }
});

//rendering the scenes + rotations

function animate() {
  requestAnimationFrame(animate);

  sphere1.rotation.x += 0.005;
  sphere1.rotation.y += 0.005;

  sphere2.rotation.x += 0.005;
  sphere2.rotation.y += 0.005;

  sphere3.rotation.x += 0.005;
  sphere3.rotation.y += 0.005;

  sphere4.rotation.x += 0.005;
  sphere4.rotation.y += 0.005;

  sphere5.rotation.x += 0.005;
  sphere5.rotation.y += 0.005;

  sphere6.rotation.x += 0.005;
  sphere6.rotation.y += 0.005;

  renderer1.render(scene1, camera1);
  renderer2.render(scene2, camera2);
  renderer3.render(scene3, camera3);
  renderer4.render(scene4, camera4);
  renderer5.render(scene5, camera5);
  renderer6.render(scene6, camera6);
}

//call the animation
animate();
