//escena
const scene = new THREE.Scene();

scene.background = new THREE.Color(0xffffff); 

var loader = new THREE.TextureLoader();
loader.load('../images/Espacio.jpg', function(texture){
    scene.background = texture;
});

//camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    
camera.position.z = 15;
camera.position.x = 0;
camera.position.y = 1;

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshMatcapMaterial( {color: 0xffffff} );
const cube1 = new THREE.Mesh( geometry, material );
cube1.position.set(-6, -1, 1)

const cube2 = new THREE.Mesh( geometry, material);
cube2.position.set(5, -1, 1);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 1),
    new THREE.MeshNormalMaterial({})
);
cube3.position.set(5, 3, 1);

const cube4 = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshNormalMaterial({})
);
cube4.position.set(-6, 3, 1);

scene.add(cube1, cube2, cube3, cube4)

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../images/texturaa.jpg');
material.matcap = matcap;
material.flatShading = true;

//controles

let objects = [cube1, cube2, cube3, cube4]

const dcontrol = new THREE.DragControls(objects, camera, renderer.domElement);
dcontrol.addEventListener('hoveron', function(event){
    event.object.material.wireframe = true;
    event.object.scale.y *=4;
});
dcontrol.addEventListener('hoveroff', function(event){
    event.object.material.wireframe = false;
    event.object.scale.y /=4;
});

dcontrol.deactivate();
dcontrol.activate();

const flyControls = new THREE.FlyControls( camera, renderer.domElement);
flyControls.movementSpeed =50;
flyControls.rollSpeed =0.01;
flyControls.autoForward =false;
flyControls.dragToLock =false;

/* const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line ); */
/* var control = new THREE.OrbitControls( camera, renderer.domElement);
control.minDistance = 5;
control.maxDistance = 12; */

/* const Pointer = new THREE.PointerLockControls( camera, renderer.domElement);
document.getElementById('btnplay'), onclick = () => {
    Pointer.lock()
}; */

//animacion

function animate() {
    requestAnimationFrame( animate );

    cube2.rotation.x += 0.02;
    cube2.rotation.y += 0.01;

    cube1.rotation.x += 0.02;
    cube1.rotation.y += 0.01;

    flyControls.update(0.2);
    
    renderer.render( scene, camera );
}
animate();  













/* //escenarios
const scene = new THREE.Scene();
scene.background = new THREE.Color(181818)

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//animacion
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate(); */