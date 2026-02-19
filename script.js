console.log("EXCELSO’26 Website Loaded Successfully!");

// ===============================
// RULES TOGGLE + CONFETTI + SPARKLES
// ===============================

const fireConfetti = () => {
    console.log("Confetti Celebration!");
    // If using canvas-confetti library:
    // confetti();
};

function createSparkles(x, y) {
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);

        const size = Math.random() * 10 + 5;
        sparkle.style.cssText = `
            width:${size}px;
            height:${size}px;
            left:${x}px;
            top:${y}px;
            background:gold;
            position:absolute;
            border-radius:50%;
            pointer-events:none;
        `;

        const destinationX = x + (Math.random() - 0.5) * 100;
        const destinationY = y + (Math.random() - 0.5) * 100;

        sparkle.animate([
            { transform: 'translate(0,0)', opacity: 1 },
            { transform: `translate(${destinationX - x}px, ${destinationY - y}px)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
}

document.querySelectorAll('.rules-toggle').forEach(button => {
    button.addEventListener('click', (e) => {

        const rulesDiv = document.getElementById(button.getAttribute('aria-controls'));
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', !isExpanded);

        if (rulesDiv) {
            rulesDiv.style.display = isExpanded ? 'none' : 'block';
        }

        if (!isExpanded) {
            fireConfetti();
            createSparkles(e.pageX, e.pageY);
        }
    });
});


// ===============================
// SCROLL ANIMATION (Intersection Observer)
// ===============================

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.event-card, .fade-in').forEach(el => {
    observer.observe(el);
});


// ===============================
// COUNTDOWN TIMER (Bug-Free)
// ===============================

const countdownElement = document.getElementById("countdown");

if (countdownElement) {
    const targetDate = new Date("March 7, 2026 08:30:00").getTime();

    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = "🎉 EXCELSO’26 HAS BEGUN!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        countdownElement.innerHTML = `
            <strong>${days}</strong> Days 
            <strong>${hours}</strong> Hours 
            <strong>${minutes}</strong> Minutes
        `;
    }, 1000);
}
/* ============================= */
/* REGISTRATION PREMIUM SECTION  */
/* ============================= */

.registration-section {
    padding: 100px 20px;
    text-align: center;
    background: linear-gradient(135deg, #001f3f, #003566);
    position: relative;
}

.register-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 10px;
    color: #ffd60a;
}

.register-tagline {
    font-size: 1.1rem;
    margin-bottom: 30px;
    color: #ffffffcc;
    letter-spacing: 1px;
}

.register-countdown {
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-weight: 600;
}

#mini-countdown {
    font-size: 1.5rem;
    color: #00ffff;
    margin-top: 10px;
}

.register-btn {
    display: inline-block;
    background: #ffd60a;
    color: #000;
    padding: 18px 45px;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px rgba(255, 214, 10, 0.6);
    animation: pulseGlow 2s infinite;
}

.register-btn:hover {
    transform: scale(1.08);
    background: #ffc300;
}

.register-note {
    margin-top: 20px;
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Glow Animation */
@keyframes pulseGlow {
    0% { box-shadow: 0 0 10px rgba(255,214,10,0.6); }
    50% { box-shadow: 0 0 30px rgba(255,214,10,1); }
    100% { box-shadow: 0 0 10px rgba(255,214,10,0.6); }
}

/* Mobile Responsive */
@media(max-width: 768px) {
    .register-title { font-size: 1.8rem; }
    .register-btn { padding: 15px 30px; font-size: 1rem; }
}
