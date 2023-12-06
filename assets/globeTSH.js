const scene = new THREE.Scene();
let camera;

// Initialize camera, light
  camera = new THREE.PerspectiveCamera();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  var dLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dLight.position.set(-800, 2000, 400);
  camera.add(dLight);

  var dLight1 = new THREE.DirectionalLight(0x7982f6, 1);
  dLight1.position.set(-200, 500, 200);
  camera.add(dLight1);

  var dLight2 = new THREE.PointLight(0x8566cc, 0.5);
  dLight2.position.set(-200, 500, 200);
  camera.add(dLight2);

  camera.position.z = 10;
  camera.position.x = 0;
  camera.position.y = 0;

  scene.add(camera);
scene.fog = new THREE.Fog(0x535ef3, 400, 2000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffff, 1);

document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 3, 3, 3 );
const material = new THREE.MeshBasicMaterial( { color: "#a80000" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


function animate() {
	requestAnimationFrame( animate );

	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;
	cube.rotation.x += 0.01;
  
  

	renderer.render( scene, camera );
}

animate();