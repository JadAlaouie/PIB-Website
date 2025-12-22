// Set page title based on language
function setPageTitle() {
    const isAr = document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl';
    document.title = isAr ? 'PIB - شركاء الوسطاء الدوليين' : 'PIB - Partners International Brokers';
}

// Handle initial page load - scroll to section if hash exists
window.addEventListener('load', () => {
    setPageTitle();
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            const section = document.querySelector(hash);
            if (section) {
                const offsetTop = section.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});

// Hero Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto-play slider every 5 seconds
const autoPlayInterval = setInterval(nextSlide, 5000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        // Reset auto-play timer when manually clicking
        clearInterval(autoPlayInterval);
        setInterval(nextSlide, 5000);
    });
});

// Navigation functionality
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');

function setActiveNav() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animate info cards on load
window.addEventListener('load', () => {
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');
        }, index * 200);
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.classList.add('animate-on-scroll');
    observer.observe(card);
});

// Observe partner cards
const partnerCards = document.querySelectorAll('.partner-card');
partnerCards.forEach(card => {
    card.classList.add('animate-on-scroll');
    observer.observe(card);
});

// Observe about features
const featureItems = document.querySelectorAll('.feature-item');
featureItems.forEach(item => {
    item.classList.add('animate-on-scroll');
    observer.observe(item);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

// Detect if page is in Arabic
function isArabic() {
    return document.documentElement.lang === 'ar' || document.documentElement.dir === 'rtl';
}

// Create success modal
function showSuccessModal() {
    const isAr = isArabic();
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    modal.innerHTML = `
        <div style="
            background: white;
            padding: 3rem;
            border-radius: 16px;
            text-align: center;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            animation: slideUp 0.4s ease;
            direction: ${isAr ? 'rtl' : 'ltr'};
        ">
            <img src="assets/images/PIB.jpg" alt="PIB Logo" style="
                height: 80px;
                margin-bottom: 1.5rem;
                object-fit: contain;
            ">
            <div style="
                width: 80px;
                height: 80px;
                background: #25D366;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1.5rem;
            ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" style="width: 40px; height: 40px;">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
            </div>
            <h2 style="
                font-family: ${isAr ? "'Cairo', 'Montserrat', sans-serif" : "'Inter', sans-serif"};
                color: #1a365d;
                font-size: 1.8rem;
                margin-bottom: 1rem;
                font-weight: 700;
            ">${isAr ? 'تم استلام رسالتك!' : 'Message Received!'}</h2>
            <p style="
                font-family: ${isAr ? "'Cairo', 'Inter', sans-serif" : "'Inter', sans-serif"};
                color: #718096;
                font-size: 1.1rem;
                line-height: 1.6;
                margin-bottom: 2rem;
            ">${isAr ? 'شكراً لتواصلك مع PIB. لقد استلمنا رسالتك وسنرد عليك قريباً.' : 'Thank you for contacting PIB. We have received your message and will get back to you soon.'}</p>
            <button onclick="this.closest('div').parentElement.remove()" style="
                padding: 1rem 2.5rem;
                background: #DC143C;
                color: white;
                border: none;
                border-radius: 50px;
                font-size: 1.1rem;
                font-weight: 600;
                cursor: pointer;
                font-family: ${isAr ? "'Cairo', 'Inter', sans-serif" : "'Inter', sans-serif"};
                transition: all 0.3s ease;
            " onmouseover="this.style.background='#1a365d'" onmouseout="this.style.background='#DC143C'">
                ${isAr ? 'إغلاق' : 'Close'}
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Initialize EmailJS
(function() {
    emailjs.init("I7e--GDFJqgr-3gqY");
})();

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
        from_name: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Show loading state on button
    const isAr = isArabic();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = isAr ? 'جاري الإرسال...' : 'Sending...';
    submitButton.disabled = true;

    try {
        // Send email using EmailJS
        await emailjs.send('service_igb6t8e', 'template_y2na7ow', formData);

        // Show success modal
        showSuccessModal();

        // Reset form
        contactForm.reset();
    } catch (error) {
        console.error('Error sending email:', error);
        const errorMessage = isAr
            ? 'عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.'
            : 'Sorry, there was an error sending your message. Please try again or contact us directly.';
        alert(errorMessage);
    } finally {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled * 0.002);
    }
});

// Service card hover effects
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.style.transition = 'opacity 0.5s ease';
    if (img.complete) {
        img.style.opacity = '1';
    } else {
        img.style.opacity = '0';
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    }
});

// Counter animation for statistics (can be used for future enhancements)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// WhatsApp button functionality
document.addEventListener('DOMContentLoaded', function() {
    let whatsappBtn = document.createElement('a');
    whatsappBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 28px; height: 28px;">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
    `;
    whatsappBtn.setAttribute('id', 'whatsappBtn');
    const whatsappText = isArabic() ? 'مرحبا' : 'Hi';
    whatsappBtn.setAttribute('href', `https://wa.me/15551591378?text=${encodeURIComponent(whatsappText)}`);
    whatsappBtn.setAttribute('target', '_blank');
    whatsappBtn.setAttribute('rel', 'noopener noreferrer');
    whatsappBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #25D366;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
    `;

    document.body.appendChild(whatsappBtn);

    // Track if animation has already played
    let whatsappAnimationPlayed = false;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            whatsappBtn.style.opacity = '1';
            whatsappBtn.style.visibility = 'visible';

            // Play pop animation only once when first appearing
            if (!whatsappAnimationPlayed) {
                whatsappBtn.style.animation = 'popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55), pulse 2s infinite 0.6s';
                whatsappAnimationPlayed = true;
            }
        } else {
            whatsappBtn.style.opacity = '0';
            whatsappBtn.style.visibility = 'hidden';
        }
    });

    whatsappBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.6)';
    });

    whatsappBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
    });
});

// Add lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 8;
}

// Real-time form validation
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

emailInput.addEventListener('blur', function() {
    if (this.value && !validateEmail(this.value)) {
        this.style.borderColor = '#e53e3e';
    } else {
        this.style.borderColor = '#e2e8f0';
    }
});

phoneInput.addEventListener('blur', function() {
    if (this.value && !validatePhone(this.value)) {
        this.style.borderColor = '#e53e3e';
    } else {
        this.style.borderColor = '#e2e8f0';
    }
});

// Add typing effect for hero text (optional enhancement)
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

// Animate elements on scroll
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

animateOnScrollElements.forEach(el => {
    scrollObserver.observe(el);
});

// Prevent form submission if validation fails
contactForm.addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const isAr = isArabic();

    if (!validateEmail(email)) {
        e.preventDefault();
        const emailError = isAr ? 'يرجى إدخال عنوان بريد إلكتروني صالح.' : 'Please enter a valid email address.';
        alert(emailError);
        return false;
    }

    if (!validatePhone(phone)) {
        e.preventDefault();
        const phoneError = isAr ? 'يرجى إدخال رقم هاتف صالح.' : 'Please enter a valid phone number.';
        alert(phoneError);
        return false;
    }
});

// Add smooth reveal animations for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
});

// Make hero section visible immediately
document.querySelector('.hero').style.opacity = '1';
document.querySelector('.hero').style.transform = 'translateY(0)';

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Add click ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');

    const existingRipple = button.getElementsByClassName('ripple')[0];
    if (existingRipple) {
        existingRipple.remove();
    }

    button.appendChild(ripple);
}

const buttons = document.querySelectorAll('.cta-button, .submit-button');
buttons.forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('PIB Website Loaded Successfully');