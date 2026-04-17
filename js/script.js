// Simple example JavaScript
console.log("Website loaded successfully!");

// Example: Add click event to navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Navigating to: ' + this.textContent);
        });
    });
});