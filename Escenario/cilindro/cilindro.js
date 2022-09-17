//Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

//Camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

camera.position.z = 20;
camera.position.x = 0.2;
camera.position.y = -0.2;

//Render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometria
const geometry = new THREE.CylinderGeometry( 5, 2, 13, 10 );
const material = new THREE.MeshMatcapMaterial( {color: 0x0061FF} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../images/agua.jpg');
material.matcap = matcap;
material.flatShading = true;


//animacion
function animate(){
    requestAnimationFrame( animate );

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.02;

    line.rotation.x += 0.01;
    line.rotation.y += 0.02;
    
    renderer.render( scene, camera);

}
animate();