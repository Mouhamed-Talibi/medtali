// Content switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const mainTitle = document.querySelector('.main-title');
    const secondaryTitle = document.querySelector('.secondary-title');
    const mainDescription = document.querySelector('.main-description');
    const secondaryDescription = document.querySelector('.secondary-description');
    const mainImg = document.querySelector('.main-img');
    const secondaryImg = document.querySelector('.secondary-img');
    
    // Initially hide secondary content
    secondaryTitle.style.display = 'none';
    secondaryDescription.style.display = 'none';
    secondaryImg.style.display = 'none';
    
    // Variables to track current state
    let isMainContentVisible = true;
    
    // Function to switch between main and secondary content
    function switchContent() {
        if (isMainContentVisible) {
            // Hide main content
            mainTitle.style.display = 'none';
            mainDescription.style.display = 'none';
            mainImg.style.display = 'none';
            
            // Show secondary content
            secondaryTitle.style.display = 'block';
            secondaryDescription.style.display = 'block';
            secondaryImg.style.display = 'block';
        } else {
            // Show main content
            mainTitle.style.display = 'block';
            mainDescription.style.display = 'block';
            mainImg.style.display = 'block';
            
            // Hide secondary content
            secondaryTitle.style.display = 'none';
            secondaryDescription.style.display = 'none';
            secondaryImg.style.display = 'none';
        }
        
        // Toggle state
        isMainContentVisible = !isMainContentVisible;
    }
    
    // Switch content every 20 seconds
    setInterval(switchContent, 20000);
    
    // Add smooth transition by adding CSS classes dynamically
    const style = document.createElement('style');
    style.textContent = `
        .about-images img {
            transition: opacity 0.5s ease-in-out;
        }
        .main-title, .secondary-title,
        .main-description, .secondary-description {
            transition: opacity 0.5s ease-in-out;
        }
        .about-images img[style*="display: none"] {
            opacity: 0;
        }
        .about-images img:not([style*="display: none"]) {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});