// Smooth scroll behavior for link buttons
document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.href === '#') {
            e.preventDefault();
        }
    });
});

// Add click animation to social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.href === '#') {
            e.preventDefault();
        }
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.animation = 'ripple 0.6s ease-out';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});
