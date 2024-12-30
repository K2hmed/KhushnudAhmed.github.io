const canvas = document.getElementById('geometricCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

const mouse = {
    x: null,
    y: null,
    radius: 100 // The radius of interaction
};

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

class Particle {
    constructor(x, y, size, color, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        // Check boundaries
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.velocityX = -this.velocityX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.velocityY = -this.velocityY;
        }

        // Check mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const repelForce = 5;
            this.x -= Math.cos(angle) * repelForce;
            this.y -= Math.sin(angle) * repelForce;
        }

        this.x += this.velocityX;
        this.y += this.velocityY;
    }
}

function connectParticles() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            const dx = particlesArray[a].x - particlesArray[b].x;
            const dy = particlesArray[a].y - particlesArray[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
                ctx.lineWidth = 1;
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}

function init() {
    particlesArray = [];
    let numParticles = 60; // Default number of particles

    // Adjust the number of particles for smaller screens
    if (window.innerWidth < 768) { 
      numParticles = 30; // Reduce particles for mobile
    }

    for (let i = 0; i < numParticles; i++) {
        let size = Math.random() * 5 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let velocityX = Math.random() * 1 - 0.5;
        let velocityY = Math.random() * 1 - 0.5;
        particlesArray.push(new Particle(x, y, size, '#666', velocityX, velocityY));
    }
}

function animate() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight; // Adjust height to match the document

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    });
    connectParticles();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight; // Adjust height to match the document
    init();
});

init();
animate();



/* New and can edit*/

// JavaScript for fade-out effect on scroll
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    navbar.classList.add('hidden'); // Hide when scrolling down
  } else {
    navbar.classList.remove('hidden'); // Show when scrolling up
  }
  lastScrollY = window.scrollY;
});

document.querySelector('.scroll-down').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});



const aboutMeHeading = document.querySelector('.about-me-heading');

aboutMeHeading.addEventListener('mouseover', () => {
    aboutMeHeading.style.transform = 'scale(1.1)'; 
});

aboutMeHeading.addEventListener('mouseout', () => {
    aboutMeHeading.style.transform = 'scale(1)'; 
});

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Khushnud Ahmed - Resume.pdf'; // Replace with the actual path to your resume
    link.download = 'KhushnudAhmed_Resume.pdf'; // Replace with your desired filename
    link.click();
}

const contactSection = document.getElementById('contact');

function handleScroll() {
  const sectionTop = contactSection.offsetTop;
  const scrollPosition = window.pageYOffset;

  // Adjust the offset as needed 
  if (scrollPosition > sectionTop - window.innerHeight / 2) { 
    contactSection.classList.add('show');
    window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);
