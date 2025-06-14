// Navigation functionality
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section, .hero');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Show selected section
    if (sectionId === 'home') {
        document.querySelector('.hero').style.display = 'flex';
    } else {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('active');
        }
    }
}

// Initialize - show home by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Form handling
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            // This prevents multiple alerts on pages with multiple forms
            if (!form.classList.contains('newsletter-form') && !form.classList.contains('message-form')) {
                form.reset();
            }
        });
    });

    // File upload functionality
    const fileInput = document.getElementById('images');
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const fileUpload = document.querySelector('.file-upload p');
            const files = e.target.files;
            if (files.length > 0) {
                fileUpload.textContent = `${files.length} file(s) selected`;
            } else {
                fileUpload.textContent = 'Click here to upload your reference photos';
            }
        });
    }

    // Add to cart functionality
    document.querySelectorAll('.btn').forEach(button => {
        if (button.textContent === 'Add to Cart') {
            button.addEventListener('click', function() {
                alert('Item added to cart! (This would integrate with your payment system)');
            });
        } else if (button.textContent === 'Request this Scenery') {
            button.addEventListener('click', function() {
                showSection('commission');
                window.scrollTo(0, 0);
            });
        }
    });
});