const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('../images/egipto.jpg', function(texture){
    scene.background = texture;
});

{
    const color = 0xffffff;
    const near = 1;
    const far = 15;
    const density = 100;
      scene.fog = new THREE.Fog(color, near, far, density);
}

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.ConeGeometry( 2, 3, 10 );
const material = new THREE.MeshMatcapMaterial( {color: 0xFFFFFF} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.x = -3;
camera.position.y = 0;
camera.position.z = 6;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load('../images/ladrillos.jpg');
material.matcap = matcap;
material.flatShading = true;
 
function animate() {
	requestAnimationFrame( animate );

    cone.rotation.y += 0.01;
    line.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();