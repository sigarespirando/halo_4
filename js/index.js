import * as THREE from './three';
import { GLTFLoader } from './GLTFLoader';
import { OrbitControls } from './OrbitControls';

//CANVAS SETUP
const threejsCanvas = document.querySelector('#threejs-canvas')
let width = threejsCanvas.offsetWidth
let height = threejsCanvas.offsetHeight

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
const ambientLight = new THREE.AmbientLight(0xAFD3DD, 0.1); // Color y intensidad
scene.add(ambientLight);

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
});
renderer.setSize( width, height );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
threejsCanvas.appendChild( renderer.domElement );

const loader = new GLTFLoader();

const light = new THREE.DirectionalLight(0xffffff, 0.8);
light.position.set(1, 1, 1); // Ajusta la posición de la luz
scene.add(light);

loader.load( 'fecha.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

const controls = new OrbitControls( camera, renderer.domElement );

camera.position.set( 0, 0, 5 );
controls.update();

window.addEventListener('resize', onResize);

function animate() {
	requestAnimationFrame( animate );
	controls.update();
	scene.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

funtion onResize() {
    width = threejsCanvas.offsetWidth;
    height = threejsCanvas.offsetHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}