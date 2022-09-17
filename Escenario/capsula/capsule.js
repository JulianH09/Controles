//escena
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../images/anochecer.jpg', function(texture){
  scene.background = texture;
});

{
const color = 0x181818;
const near = 1;
const far = 6;
const density = 10;
  scene.fog = new THREE.Fog(color, near, far, density);
}

//camera 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

camera.position.z = 4;
camera.position.x = 0.3;
camera.position.y = -0.5;

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometria
const geometry = new THREE.CapsuleGeometry( 1, 1, 5, 10 );
const material = new THREE.MeshStandardMaterial( {color: 0xffffff} );
const capsule = new THREE.Mesh( geometry, material );
material.metalness = 0.4;
material.roughness = 0.7;
const directionalLight = new THREE.DirectionalLight( 0xffffff, 6);
scene.add( directionalLight );
scene.add( capsule );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../images/papel.jpg');
material.matcap = matcap;
material.flatShading = true;

//controles
var control = new THREE.OrbitControls( camera, renderer.domElement);
control.minDistance = 5;
control.maxDistance = 12;

//animacion
function animate(){
    requestAnimationFrame( animate );
    
    capsule.rotation.x += 0.02;
    capsule.rotation.y += 0.01;

    line.rotation.x += 0.02;
    line.rotation.y += 0.01;

    renderer.render( scene, camera );
}
animate();
