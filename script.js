console.log("EXCSELSO’26 Website Loaded Successfully!");

// Rules toggle
document.querySelectorAll('.rules-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const rulesDiv = document.getElementById(button.getAttribute('aria-controls'));
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);
        if (rulesDiv.style.display === 'block') {
            rulesDiv.style.display = 'none';
        } else {
            rulesDiv.style.display = 'block';
        }
    });
});

// Animate event cards on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });
// Add this at the top of your script
const fireConfetti = () => {
    // This is a simplified logic; usually, you'd use a library like 'canvas-confetti'
    console.log("Confetti Celebration!"); 
    // If you use the library, use: confetti();
};

document.querySelectorAll('.rules-toggle').forEach(button => {
    button.addEventListener('click', () => {
        // Trigger confetti when they open the rules
        if(button.getAttribute('aria-expanded') === 'false') {
            fireConfetti();
        }
    });
});
document.querySelectorAll('.event-card').forEach(card => {
    observer.observe(card);
});
// Carnival Click Animation
document.querySelectorAll('.rules-toggle').forEach(button => {
    button.addEventListener('click', (e) => {
        createSparkles(e.pageX, e.pageY);
    });
});

function createSparkles(x, y) {
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);
        
        const size = Math.random() * 10 + 5;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.background = `gold`;
        sparkle.style.position = `absolute`;
        sparkle.style.borderRadius = `50%`;
        
        // Simple move animation
        const destinationX = x + (Math.random() - 0.5) * 100;
        const destinationY = y + (Math.random() - 0.5) * 100;
        
        sparkle.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${destinationX - x}px, ${destinationY - y}px)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
}
