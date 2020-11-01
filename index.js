const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )

renderer.setClearColor("#222222")
document.body.appendChild( renderer.domElement )
camera.position.z = 5

window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

var geometry = new THREE.DodecahedronGeometry( 1, 1)
var material = new THREE.MeshStandardMaterial( { color: 0x00008B, flatShading: true, metalness: 0, roughness: 3 })
var dodecahedron = new THREE.Mesh ( geometry, material )
scene.add( dodecahedron )

var geometry2 = new THREE.BoxGeometry( 3, 3, 3)
var material2 = new THREE.MeshBasicMaterial( {
	color: "#dadada", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry2, material2 )
scene.add( wireframeCube )

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );


function animate() {
	requestAnimationFrame( animate )
	dodecahedron.rotation.x += 0.04;
	dodecahedron.rotation.y += 0.04;
	wireframeCube.rotation.x -= 0.01;
	wireframeCube.rotation.y -= 0.01;
	renderer.render( scene, camera )
}
animate()
