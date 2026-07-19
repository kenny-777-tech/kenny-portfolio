/* ============================================
   KENNIS M PORTFOLIO - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavigation();
    initScrollReveal();
    initContactForm();
    initSmoothScroll();
});

/* ============================================
   NAVIGATION
   ============================================ */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for styling
        if (currentScroll > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');

    function highlightActiveLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveLink);
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */
function initScrollReveal() {
    // Add reveal class to elements
    const revealElements = document.querySelectorAll(
        '.about-card, .skill-category, .timeline-item, .project-card, .contact-link, .resume-info-card, .resume-download-card'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    // Intersection Observer for reveal
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Add stagger delay for siblings
                const siblings = entry.target.parentElement?.children;
                if (siblings) {
                    Array.from(siblings).forEach((sibling, index) => {
                        if (sibling.classList.contains('reveal')) {
                            sibling.style.transitionDelay = `${index * 0.1}s`;
                        }
                    });
                }
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));

    // Skill pills animation on scroll
    const skillPills = document.querySelectorAll('.skill-pill');
    const skillsSection = document.getElementById('skills');

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillPills.forEach((pill, index) => {
                    setTimeout(() => {
                        pill.style.opacity = '1';
                        pill.style.transform = 'translateY(0)';
                    }, index * 50);
                });
            }
        });
    }, { threshold: 0.3 });

    if (skillsSection) {
        // Initial state
        skillPills.forEach(pill => {
            pill.style.opacity = '0';
            pill.style.transform = 'translateY(20px)';
            pill.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        });

        skillsObserver.observe(skillsSection);
    }
}

/* ============================================
   CONTACT FORM
   ============================================ */
function initContactForm() {
    const form = document.getElementById('contactForm');

    form?.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = 'Sending... <span>⏳</span>';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual submission logic)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show success state
        submitBtn.innerHTML = 'Message Sent! <span>✅</span>';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        // Reset form
        form.reset();

        // Reset button after delay
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
    });

    // Input animation effects
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

    formInputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}

/* ============================================
   ADDITIONAL EFFECTS
   ============================================ */

// Parallax effect for hero glow
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.image-glow');
    if (glow && window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    }
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Add floating animation to flower emojis in business section
const flowers = document.querySelectorAll('.flower');
flowers.forEach((flower, index) => {
    flower.style.animationDelay = `${index * 0.5}s`;
});

// Console easter egg
console.log(`
%c👋 Hello there, fellow developer!
%cLooking for the code? Let's connect!
%c💼 LinkedIn | 💻 GitHub | 📧 Email

%c— Kenny
`,
    'color: #9d4edd; font-size: 18px; font-weight: bold;',
    'color: #e0aaff; font-size: 14px;',
    'color: #c77dff; font-size: 12px;',
    'color: #7b2cbf; font-size: 14px; font-style: italic;'
);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttle to scroll handlers if needed
window.addEventListener('scroll', throttle(() => {
    // Any additional scroll handlers can go here
}, 100));
