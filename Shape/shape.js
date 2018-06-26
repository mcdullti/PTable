var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var detail = 0;
var geometry = new THREE.IcosahedronGeometry( 1, detail );
var material = new THREE.MeshPhongMaterial( { color: 0xFFFFFF } );
var isocahedron = new THREE.Mesh( geometry, material );
scene.add( isocahedron );

camera.position.z = 5;

var pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);

var animate = function () {
	requestAnimationFrame( animate );

	isocahedron.rotation.x += 0.1;
	isocahedron.rotation.y += 0.1;

	renderer.render(scene, camera);
};

animate();