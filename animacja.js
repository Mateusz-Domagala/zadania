const kontener = document.getElementById('animacja3D');

const scena = new THREE.Scene();
scena.background = new THREE.Color(0x202020);

const kamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
kamera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
kontener.appendChild(renderer.domElement);

const geometria = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x44aa88, wireframe: true });
const kostka = new THREE.Mesh(geometria, material);
scena.add(kostka);


function animacja() {
    requestAnimationFrame(animacja);
    

    kostka.rotation.x += 0.01;
    kostka.rotation.y += 0.01;
    
    renderer.render(scena, kamera);
}


animacja();


window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    kamera.aspect = window.innerWidth / window.innerHeight;
    kamera.updateProjectionMatrix();
});