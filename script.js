// Responsive Menu Management
let isMobile = window.innerWidth <= 768;
let isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;

function updateMenuVisibility() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavMenu = document.querySelector('.mobile-nav-menu');
    
    if (isMobile) {
        // Mobile: Hide desktop menu, show mobile menu toggle
        if (navMenu) navMenu.style.display = 'none';
        if (mobileMenuToggle) mobileMenuToggle.style.display = 'flex';
        // Don't hide mobile-nav-menu, let CSS handle it
    } else if (isTablet) {
        // Tablet: Show desktop menu, hide mobile menu toggle
        if (navMenu) navMenu.style.display = 'flex';
        if (mobileMenuToggle) mobileMenuToggle.style.display = 'none';
        if (mobileNavMenu) mobileNavMenu.style.display = 'none';
    } else {
        // Desktop: Show desktop menu, hide mobile menu toggle
        if (navMenu) navMenu.style.display = 'flex';
        if (mobileMenuToggle) mobileMenuToggle.style.display = 'none';
        // Hide mobile menu on desktop
        if (mobileNavMenu) mobileNavMenu.style.display = 'none';
    }
}

// Initialize menu on page load
updateMenuVisibility();

// Update menu on window resize
window.addEventListener('resize', () => {
    const wasMobile = isMobile;
    const wasTablet = isTablet;
    
    isMobile = window.innerWidth <= 768;
    isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
    
    if (wasMobile !== isMobile || wasTablet !== isTablet) {
        updateMenuVisibility();
    }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');

if (mobileMenuToggle && mobileNavMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileNavMenu.classList.toggle('active');
        
        // Mobil menü açıkken navbar'ı gizle
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (mobileNavMenu.classList.contains('active')) {
                navbar.style.setProperty('background', 'transparent', 'important');
                navbar.style.setProperty('backdrop-filter', 'none', 'important');
                
                // Mobil menü açıkken menü butonunu gizle
                mobileMenuToggle.style.setProperty('opacity', '0', 'important');
                mobileMenuToggle.style.setProperty('visibility', 'hidden', 'important');
                mobileMenuToggle.style.setProperty('pointer-events', 'none', 'important');
                mobileMenuToggle.style.setProperty('z-index', '9998', 'important');
            } else {
                navbar.style.setProperty('background', 'rgba(255, 255, 255, 0.98)', 'important');
                navbar.style.setProperty('backdrop-filter', 'blur(20px)', 'important');
                
                // Mobil menü kapalıyken menü butonunu göster
                mobileMenuToggle.style.setProperty('opacity', '1', 'important');
                mobileMenuToggle.style.setProperty('visibility', 'visible', 'important');
                mobileMenuToggle.style.setProperty('pointer-events', 'auto', 'important');
                mobileMenuToggle.style.setProperty('z-index', '10000', 'important');
            }
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileNavMenu.classList.remove('active');
            
            // Navbar'ı geri getir
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.style.setProperty('background', 'rgba(255, 255, 255, 0.98)', 'important');
                navbar.style.setProperty('backdrop-filter', 'blur(20px)', 'important');
            }
            
            // Menü butonunu geri getir
            mobileMenuToggle.style.setProperty('opacity', '1', 'important');
            mobileMenuToggle.style.setProperty('visibility', 'visible', 'important');
            mobileMenuToggle.style.setProperty('pointer-events', 'auto', 'important');
            mobileMenuToggle.style.setProperty('z-index', '10000', 'important');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !mobileNavMenu.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            mobileNavMenu.classList.remove('active');
            
            // Navbar'ı geri getir
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.style.setProperty('background', 'rgba(255, 255, 255, 0.98)', 'important');
                navbar.style.setProperty('backdrop-filter', 'blur(20px)', 'important');
            }
            
            // Menü butonunu geri getir
            mobileMenuToggle.style.setProperty('opacity', '1', 'important');
            mobileMenuToggle.style.setProperty('visibility', 'visible', 'important');
            mobileMenuToggle.style.setProperty('pointer-events', 'auto', 'important');
            mobileMenuToggle.style.setProperty('z-index', '10000', 'important');
        }
    });

    // Close menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            mobileMenuToggle.classList.remove('active');
            mobileNavMenu.classList.remove('active');
            
            // Navbar'ı geri getir
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.style.setProperty('background', 'rgba(255, 255, 255, 0.98)', 'important');
                navbar.style.setProperty('backdrop-filter', 'blur(20px)', 'important');
            }
            
            // Menü butonunu geri getir
            mobileMenuToggle.style.setProperty('opacity', '1', 'important');
            mobileMenuToggle.style.setProperty('visibility', 'visible', 'important');
            mobileMenuToggle.style.setProperty('pointer-events', 'auto', 'important');
            mobileMenuToggle.style.setProperty('z-index', '10000', 'important');
        }
    });

    // Close menu when clicking on close button (×)
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileNavMenu.classList.remove('active');
            
            // Navbar'ı geri getir
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.style.setProperty('background', 'rgba(255, 255, 255, 0.98)', 'important');
                navbar.style.setProperty('backdrop-filter', 'blur(20px)', 'important');
            }
            
            // Menü butonunu geri getir
            mobileMenuToggle.style.setProperty('opacity', '1', 'important');
            mobileMenuToggle.style.setProperty('visibility', 'visible', 'important');
            mobileMenuToggle.style.setProperty('pointer-events', 'auto', 'important');
            mobileMenuToggle.style.setProperty('z-index', '10000', 'important');
        });
    }
}



// Navbar background change on scroll - Desktop ve Mobil için
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const topBar = document.querySelector('.top-bar');
    const mobileNavMenu = document.querySelector('.mobile-nav-menu');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (!navbar) return;
    
    // Mobil cihaz kontrolü
    const isMobile = window.innerWidth <= 768;
    
    console.log('Scroll event triggered, scrollY:', window.scrollY, 'isMobile:', isMobile); // Debug için
    
    if (window.scrollY > 50) {
        console.log('Moving navbar to top'); // Debug için
        // Scroll yapıldığında navbar'ı en üste taşı
        if (isMobile) {
            navbar.style.setProperty('top', '0', 'important');
        } else {
            navbar.style.setProperty('top', '0', 'important');
        }
        navbar.style.setProperty('background', 'rgba(255, 255, 255, 0.98)', 'important');
        navbar.style.setProperty('box-shadow', '0 2px 20px rgba(0, 0, 0, 0.1)', 'important');
        navbar.style.setProperty('z-index', '1001', 'important');
        
        // Mobil menüyü de yukarı taşı
        if (mobileNavMenu) {
            mobileNavMenu.style.setProperty('top', '0', 'important');
        }
        
        // Top bar'ı gizle (sadece desktop'ta)
        if (topBar && !isMobile) {
            topBar.style.transform = 'translateY(-100%)';
            topBar.style.transition = 'transform 0.3s ease';
        }
    } else {
        console.log('Moving navbar to normal position'); // Debug için
        // Sayfa başına dönüldüğünde normal pozisyona getir
        if (isMobile) {
            navbar.style.setProperty('top', '32px', 'important');
        } else {
            navbar.style.setProperty('top', '32px', 'important');
        }
        navbar.style.setProperty('background', 'rgba(255, 255, 255, 0.95)', 'important');
        navbar.style.setProperty('box-shadow', 'none', 'important');
        navbar.style.setProperty('z-index', '1000', 'important');
        
        // Mobil menüyü de normal pozisyona getir
        if (mobileNavMenu) {
            if (isMobile) {
                mobileNavMenu.style.setProperty('top', '32px', 'important');
            } else {
                mobileNavMenu.style.setProperty('top', '32px', 'important');
            }
        }
        
        // Top bar'ı göster (sadece desktop'ta)
        if (topBar && !isMobile) {
            topBar.style.transform = 'translateY(0)';
            topBar.style.transition = 'transform 0.3s ease';
        }
    }
}

// Desktop scroll event
window.addEventListener('scroll', handleNavbarScroll);

// Mobil touch events
window.addEventListener('touchmove', handleNavbarScroll);
window.addEventListener('touchstart', handleNavbarScroll);

// Mobil scroll events (iOS Safari için)
window.addEventListener('scroll', handleNavbarScroll, { passive: false });
document.addEventListener('scroll', handleNavbarScroll, { passive: false });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .project-card, .section-header');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Parallax effect for hero section - REMOVED

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form validation for contact form (if exists)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        
        if (!name || !email || !message) {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }
        
        // Simulate form submission
        alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        contactForm.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Counter animation for statistics (if exists)
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

// Initialize counter animations when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = parseInt(target.getAttribute('data-target'));
            animateCounter(target, finalValue);
            counterObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

// Observe counter elements
document.querySelectorAll('[data-target]').forEach(counter => {
    counterObserver.observe(counter);
});

// Back to top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
`;

document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Hover effect for back to top button
backToTopButton.addEventListener('mouseenter', () => {
    backToTopButton.style.transform = 'translateY(-3px)';
    backToTopButton.style.boxShadow = '0 6px 20px rgba(231, 76, 60, 0.4)';
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.transform = 'translateY(0)';
    backToTopButton.style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.3)';
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Smooth reveal animations for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Parallax effect for hero section - REMOVED

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .product-card, .service-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Typing effect for hero title - REMOVED

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Animate numbers in stats
        const stats = document.querySelectorAll('[data-target]');
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCounter();
        });
    });

    // Add scroll-triggered animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .product-card, .service-card');
        elements.forEach((el, index) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial call

    // Enhanced page header animations
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) {
        const headerContent = pageHeader.querySelector('.header-content');
        const highlightItems = pageHeader.querySelectorAll('.highlight-item');
        
        // Animate header content on load
        setTimeout(() => {
            headerContent.style.opacity = '1';
            headerContent.style.transform = 'translateY(0)';
        }, 300);
        
        // Animate highlight items with stagger
        highlightItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0) scale(1)';
            }, 600 + (index * 200));
        });
    }

    // Floating animation for cards - REMOVED

    // Particle effect for hero section - REMOVED

    // Smooth reveal for sections
    const revealSections = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                            entry.target.style.transition = 'all 0.8s ease';
                        }, index * 100);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(section);
        });
    };
    revealSections();

    // Enhanced hover effects with 3D transform
    const add3DHoverEffects = () => {
        const cards = document.querySelectorAll('.feature-card, .product-card, .service-card, .value-card, .review-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    };
    add3DHoverEffects();

    // Text reveal animation
    const animateTextReveal = () => {
        const textElements = document.querySelectorAll('h1, h2, h3, p');
        textElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                            entry.target.style.transition = 'all 0.6s ease';
                        }, index * 50);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(element);
        });
    };
    animateTextReveal();

    // Loading screen with circular progress
    const createLoadingScreen = () => {
        const loadingScreen = document.createElement('div');
        loadingScreen.className = 'loading-screen';
        loadingScreen.innerHTML = `
            <div class="loading-content">
                <div class="loading-logo-container">
                    <div class="circular-progress">
                        <svg class="progress-ring" width="150" height="150">
                            <circle class="progress-ring-circle-bg" cx="75" cy="75" r="60" stroke-width="4" fill="transparent" stroke="#f0f0f0"/>
                            <circle class="progress-ring-circle" cx="75" cy="75" r="60" stroke-width="4" fill="transparent" stroke="url(#gradient)" stroke-linecap="round" stroke-dasharray="376.8" stroke-dashoffset="376.8"/>
                        </svg>
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:#e74c3c"/>
                                <stop offset="100%" style="stop-color:#f39c12"/>
                            </linearGradient>
                        </defs>
                        <div class="logo-center">
                            <img src="logo.webp" alt="Ritim Yapı" style="width: 75px; height: auto;">
                        </div>
                    </div>
                </div>
                <div class="loading-bar-container">
                    <div class="loading-bar">
                        <div class="loading-bar-fill"></div>
                    </div>
                </div>
            </div>
        `;
        loadingScreen.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        `;
        
        document.body.appendChild(loadingScreen);
        
        // Simulate real-time loading progress
        const progressCircle = loadingScreen.querySelector('.progress-ring-circle');
        const loadingBarFill = loadingScreen.querySelector('.loading-bar-fill');
        const circumference = 2 * Math.PI * 60; // r=60
        let progress = 0;
        
        // Real-time loading simulation with different phases
        const loadingPhases = [
            { name: 'Initializing...', duration: 300, progress: 20 },
            { name: 'Loading assets...', duration: 400, progress: 50 },
            { name: 'Processing data...', duration: 400, progress: 80 },
            { name: 'Finalizing...', duration: 300, progress: 100 }
        ];
        
        let currentPhase = 0;
        let phaseStartTime = Date.now();
        let lastProgress = 0;
        
        const animateProgress = () => {
            const currentTime = Date.now();
            const phaseElapsed = currentTime - phaseStartTime;
            const currentPhaseData = loadingPhases[currentPhase];
            
            if (currentPhase < loadingPhases.length) {
                // Calculate progress within current phase
                const phaseProgress = Math.min(phaseElapsed / currentPhaseData.duration, 1);
                const phaseStartProgress = currentPhase === 0 ? 0 : loadingPhases[currentPhase - 1].progress;
                const phaseEndProgress = currentPhaseData.progress;
                
                progress = phaseStartProgress + (phaseEndProgress - phaseStartProgress) * phaseProgress;
                
                // Add some realistic variation
                progress += Math.sin(currentTime * 0.01) * 0.5;
                progress = Math.max(0, Math.min(100, progress));
                
                const offset = circumference - (progress / 100) * circumference;
                progressCircle.style.strokeDashoffset = offset;
                
                // Update linear loading bar
                loadingBarFill.style.width = progress + '%';
                
                // Console logging with phase information
                if (Math.floor(progress) !== Math.floor(lastProgress)) {
                    console.log(`${currentPhaseData.name} - ${Math.round(progress)}%`);
                    lastProgress = progress;
                }
                
                // Check if phase is complete
                if (phaseElapsed >= currentPhaseData.duration) {
                    currentPhase++;
                    phaseStartTime = currentTime;
                    
                    // Add a small pause between phases
                    setTimeout(() => {
                        requestAnimationFrame(animateProgress);
                    }, Math.random() * 50 + 25);
                    return;
                }
                
                requestAnimationFrame(animateProgress);
            } else {
                // Loading complete
                console.log('Loading Complete!');
                setTimeout(() => {
                    loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        loadingScreen.remove();
                    }, 500);
                }, 800);
            }
        };
        
        requestAnimationFrame(animateProgress);
    };
    createLoadingScreen();

    // Magnetic effect for buttons
    const addMagneticEffect = () => {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    };
    addMagneticEffect();

    // Scroll progress indicator
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #e74c3c, #f39c12);
            z-index: 10000;
            transition: width 0.1s ease;
        `;
        
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    };
    createScrollProgress();

    // Enhanced brand slider with pause on hover and delayed start
    const brandSlider = document.querySelector('.brand-slider');
    if (brandSlider) {
        const track = brandSlider.querySelector('.brand-slider-track');
        
        // Initially pause the animation
        track.style.animationPlayState = 'paused';
        
        // Start animation after page load and loading screen
        setTimeout(() => {
            track.style.animationPlayState = 'running';
        }, 2000); // 2 seconds delay to ensure loading screen is complete
        
        brandSlider.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        
        brandSlider.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    }

    // Add ripple effect to buttons
    const addRippleEffect = () => {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    };
    addRippleEffect();

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes ripple {
            to { transform: scale(4); opacity: 0; }
        }
        
        .floating-animation {
            animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        .loading-content {
            text-align: center;
            color: #1a1a1a;
        }
        
        .loading-logo-container {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .circular-progress {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .progress-ring {
            transform: rotate(-90deg);
        }
        
        .progress-ring-circle {
            transition: stroke-dashoffset 0.1s ease;
            stroke-width: 6;
            filter: drop-shadow(0 0 5px rgba(231, 76, 60, 0.5));
        }
        
        .logo-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
        }
        
        .loading-bar-container {
            margin-top: 30px;
            text-align: center;
        }
        
        .loading-bar {
            width: 300px;
            height: 6px;
            background: rgba(26, 26, 26, 0.1);
            border-radius: 3px;
            overflow: hidden;
            margin: 0 auto 15px;
            position: relative;
        }
        
        .loading-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, #e74c3c, #f39c12);
            width: 0%;
            transition: width 0.3s ease;
            border-radius: 3px;
            position: relative;
        }
        
        .loading-bar-fill::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        .loading-text {
            font-size: 14px;
            color: #666;
            font-weight: 500;
            margin-top: 10px;
        }
    `;
    document.head.appendChild(style);
});

// Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all accordion items
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Video yükleme kontrolü - GEÇİCİ OLARAK DEVRE DIŞI
/*
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.hero-video');
    
    if (video) {
        console.log('Video elementi bulundu');
        
        // Video yükleme başarılı
        video.addEventListener('loadeddata', () => {
            console.log('✅ Video başarıyla yüklendi');
            video.style.display = 'block';
            video.style.opacity = '1';
            video.style.visibility = 'visible';
        });
        
        // Video oynatılmaya hazır
        video.addEventListener('canplay', () => {
            console.log('✅ Video oynatılmaya hazır');
            video.style.display = 'block';
            video.style.opacity = '1';
        });
        
        // Video yükleme hatası
        video.addEventListener('error', (e) => {
            console.log('❌ Video yüklenemedi:', e);
        });
        
        // Video yüklenme durumunu kontrol et
        setTimeout(() => {
            console.log('Video readyState:', video.readyState);
            console.log('Video networkState:', video.networkState);
            console.log('Video currentSrc:', video.currentSrc);
            
            if (video.readyState >= 2) {
                console.log('✅ Video zaten yüklü');
                video.style.display = 'block';
                video.style.opacity = '1';
            } else {
                console.log('⏳ Video yükleniyor...');
            }
        }, 1000);
        
        // Video yüklenmeye başladı
        video.addEventListener('loadstart', () => {
            console.log('🔄 Video yüklenmeye başladı');
        });
        
        // Video metadata yüklendi
        video.addEventListener('loadedmetadata', () => {
            console.log('📊 Video metadata yüklendi');
            console.log('Video boyutları:', video.videoWidth, 'x', video.videoHeight);
            console.log('Video süresi:', video.duration);
        });
    } else {
        console.log('❌ Video elementi bulunamadı');
    }
});
*/ 

// Product Modal Functions
const productData = {
    'yapi-malzemeleri': {
        title: "YAPI MALZEMELERİ",
        description: "Çimento, demir, tuğla, blok ve temel yapı malzemeleri. Kaliteli ve dayanıklı yapı malzemeleri ile projelerinizin temelini güçlendirin.",
        features: [
            "Portland çimentosu (CEM I, CEM II, CEM III)",
            "İnşaat demiri (8-32mm çapında)",
            "Tuğla ve briket bloklar",
            "Gazbeton bloklar",
            "Hazır harç karışımları",
            "Sıva ve sıva harcı"
        ]
    },
    'yapi-kimyasallari': {
        title: "YAPI KİMYASALLARI",
        description: "Su yalıtımı, ısı yalıtımı, yapıştırıcı ve tamir sistemleri. Modern yapı kimyasalları ile yapılarınızın ömrünü uzatın.",
        features: [
            "Su yalıtım malzemeleri (Membran, sıvı, kristal)",
            "Isı yalıtım sistemleri (EPS, XPS, taş yünü)",
            "Yapıştırıcı ve macun (Seramik, ısı yalıtımı)",
            "Tamir ve güçlendirme (Epoksi, karbon fiber)",
            "Derz dolgu ve silikon malzemeler",
            "Çatlak onarım ve enjeksiyon sistemleri"
        ]
    },
    'boya-grubu': {
        title: "BOYA GRUBU",
        description: "İç ve dış cephe boyaları, kaplama malzemeleri ve dekoratif ürünler. Renkli çözümler ile mekanlarınızı kişiselleştirin.",
        features: [
            "İç cephe boyaları (Plastik, akrilik, silikon)",
            "Dış cephe boyaları (Silikon, akrilik, tekstürlü)",
            "Kaplama malzemeleri (Saten, granit, mermer)",
            "Dekoratif ürünler (Fosforlu, metalik, özel efekt)",
            "Boya aksesuarları (Fırça, rulo, spatula)",
            "Boya hazırlama ve temizlik malzemeleri"
        ]
    },
    'altyapi-urunleri': {
        title: "ALTYAPI ÜRÜNLERİ",
        description: "Su, elektrik, doğalgaz ve iletişim altyapısı için gerekli tüm malzemeler. Güvenli ve dayanıklı altyapı çözümleri.",
        features: [
            "Su tesisatı boruları ve bağlantı elemanları",
            "Elektrik kabloları ve pano malzemeleri",
            "Doğalgaz boruları ve vanalar",
            "İletişim kabloları ve ekipmanları",
            "Drenaj ve kanalizasyon sistemleri",
            "Altyapı izolasyon malzemeleri"
        ]
    },
    'yalitim-urunleri': {
        title: "YALITIM ÜRÜNLERİ",
        description: "Isı, ses, su ve yangın yalıtımı için özel malzemeler. Enerji tasarrufu ve konfor için yalıtım çözümleri.",
        features: [
            "Isı yalıtım malzemeleri (EPS, XPS, taş yünü)",
            "Ses yalıtım malzemeleri (Akustik panel, sünger)",
            "Su yalıtım membranları ve sıvıları",
            "Yangın yalıtım malzemeleri",
            "Çatı yalıtım sistemleri",
            "Temel yalıtım malzemeleri"
        ]
    },
    'hirdavat': {
        title: "HIRDAVAT",
        description: "El aletleri, elektrikli aletler ve güvenlik ekipmanları. Profesyonel hırdavat ürünleri ile işlerinizi kolaylaştırın.",
        features: [
            "El aletleri (Çekiç, tornavida, anahtar setleri)",
            "Elektrikli aletler (Matkap, testere, taşlama)",
            "Güvenlik ekipmanları (Kask, eldiven, gözlük)",
            "Ölçüm aletleri (Lazer, su terazisi, metre)",
            "Kesme ve delme aletleri",
            "Alet çantaları ve organizasyon sistemleri"
        ]
    },
    'tesisat': {
        title: "TESİSAT",
        description: "Su, elektrik, doğalgaz ve ısıtma tesisatı malzemeleri. Güvenli ve verimli tesisat sistemleri için kaliteli ürünler.",
        features: [
            "Su tesisatı (Boru, vana, musluk, sifon)",
            "Elektrik tesisatı (Kablo, pano, priz, anahtar)",
            "Doğalgaz tesisatı (Boru, vana, regülatör)",
            "Isıtma tesisatı (Radyatör, boru, vana)",
            "Havalandırma sistemleri",
            "Tesisat aksesuarları ve bağlantı elemanları"
        ]
    },
    'is-guvenligi': {
        title: "İŞ GÜVENLİĞİ",
        description: "İş güvenliği ekipmanları ve koruyucu malzemeler. Çalışanlarınızın güvenliği için profesyonel iş güvenliği ürünleri.",
        features: [
            "Koruyucu başlık ve kasklar",
            "İş eldivenleri ve koruyucu giysiler",
            "Güvenlik ayakkabıları ve botlar",
            "Göz ve yüz koruyucuları",
            "Solunum koruyucu ekipmanlar",
            "Güvenlik işaretleri ve uyarı levhaları"
        ]
    },
    'vitrifiye': {
        title: "VİTRİFİYE",
        description: "Banyo ve mutfak vitrifiye ürünleri. Modern ve kaliteli vitrifiye ürünleri ile mekanlarınızı güzelleştirin.",
        features: [
            "Klozet ve rezervuar sistemleri",
            "Lavabo ve eviye çeşitleri",
            "Duşakabin ve küvet sistemleri",
            "Bide ve şofben ürünleri",
            "Vitrifiye aksesuarları",
            "Banyo ve mutfak mobilyaları"
        ]
    }
};

function openProductModal(productType) {
    console.log('Modal açılıyor, ürün tipi:', productType);
    
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    
    console.log('Modal element:', modal);
    
    const product = productData[productType];
    
    if (product) {
        console.log('Ürün bulundu:', product.title);
        modalTitle.textContent = product.title;
        modalDescription.textContent = product.description;
        

        
        // Clear previous features
        modalFeatures.innerHTML = '';
        
        // Add new features
        product.features.forEach(feature => {
            const featureDiv = document.createElement('div');
            featureDiv.className = 'feature-item';
            featureDiv.textContent = feature;
            modalFeatures.appendChild(featureDiv);
        });
        
        // Clear previous features
        modalFeatures.innerHTML = '';
        
        // Add new features
        product.features.forEach(feature => {
            const featureDiv = document.createElement('div');
            featureDiv.className = 'feature-item';
            featureDiv.textContent = feature;
            modalFeatures.appendChild(featureDiv);
        });
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        

    }
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeProductModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProductModal();
    }
}); 

// Gold Container Effects
function createGoldEffects() {
    const container = document.getElementById('goldContainer');
    if (!container) return;

    const particlesContainer = container.querySelector('.gold-particles');
    const sparklesContainer = container.querySelector('.gold-sparkles');

    // Create floating gold particles
    for (let i = 0; i < 20; i++) {
        createGoldParticle(particlesContainer);
    }

    // Create sparkles
    for (let i = 0; i < 15; i++) {
        createGoldSparkle(sparklesContainer);
    }

    // Add mouse interaction
    container.addEventListener('mousemove', (e) => {
        createMouseSparkle(e, sparklesContainer);
    });

    // Add click effect
    container.addEventListener('click', (e) => {
        createClickBurst(e, sparklesContainer);
    });
}

function createGoldParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, #ffd700, #ffed4e);
        border-radius: 50%;
        pointer-events: none;
        animation: float 8s infinite linear;
        opacity: 0.7;
    `;

    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (6 + Math.random() * 4) + 's';

    container.appendChild(particle);
}

function createGoldSparkle(container) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: absolute;
        width: 6px;
        height: 6px;
        background: #ffd700;
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        pointer-events: none;
        animation: sparkle 4s infinite ease-in-out;
        opacity: 0.8;
    `;

    // Random position
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 4 + 's';

    container.appendChild(sparkle);
}

function createMouseSparkle(e, container) {
    if (Math.random() > 0.7) { // 30% chance
        const sparkle = document.createElement('div');
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        sparkle.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 8px;
            height: 8px;
            background: #ffd700;
            border-radius: 50%;
            pointer-events: none;
            animation: mouseSparkle 1s ease-out forwards;
            opacity: 0.9;
        `;

        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
}

function createClickBurst(e, container) {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create burst effect
    for (let i = 0; i < 8; i++) {
        const burst = document.createElement('div');
        const angle = (i * 45) * Math.PI / 180;
        const distance = 30;

        burst.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: #ffd700;
            border-radius: 50%;
            pointer-events: none;
            animation: burst 0.8s ease-out forwards;
            opacity: 1;
        `;

        burst.style.setProperty('--angle', angle + 'rad');
        burst.style.setProperty('--distance', distance + 'px');

        container.appendChild(burst);
        setTimeout(() => burst.remove(), 800);
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        100% { transform: translateY(0px) rotate(360deg); opacity: 0.7; }
    }

    @keyframes sparkle {
        0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
        50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
    }

    @keyframes mouseSparkle {
        0% { transform: scale(0) rotate(0deg); opacity: 0.9; }
        50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
        100% { transform: scale(0) rotate(360deg); opacity: 0; }
    }

    @keyframes burst {
        0% { 
            transform: translate(0, 0) scale(1); 
            opacity: 1; 
        }
        100% { 
            transform: translate(calc(cos(var(--angle)) * var(--distance)), calc(sin(var(--angle)) * sin(var(--angle)) * var(--distance))) scale(0); 
            opacity: 0; 
        }
    }
`;

document.head.appendChild(style);

// Initialize gold effects when page loads
document.addEventListener('DOMContentLoaded', createGoldEffects);