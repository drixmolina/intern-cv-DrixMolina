// Welcome message on page load
document.addEventListener('DOMContentLoaded', function() {
    showWelcomeMessage();
    initializeDarkMode();
    initializeSectionToggle();
    initializeClickCounter();
    initializeContactForm();
});

// Feature 1: Welcome Message Alert
function showWelcomeMessage() {
    const userName = "";
    const welcomeMessage = `Welcome to my CV! 👋\n\nHello ${userName}, thanks for visiting my professional portfolio. Feel free to explore my skills, education, and projects.`;
    alert(welcomeMessage);
}

// Feature 2: Dark Mode / Light Mode Toggle
function initializeDarkMode() {
    const toggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    
    toggleButton.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Feature 3: Show/Hide Sections
function initializeSectionToggle() {
    const sections = document.querySelectorAll('main > section');
    
    sections.forEach((section, index) => {
        // Create toggle button for each section
        const heading = section.querySelector('h2');
        if (heading) {
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'toggle-section-btn';
            toggleBtn.textContent = '▼';
            toggleBtn.setAttribute('aria-expanded', 'true');
            toggleBtn.setAttribute('aria-label', `Toggle ${heading.textContent} section`);
            
            heading.style.display = 'flex';
            heading.style.justifyContent = 'space-between';
            heading.style.alignItems = 'center';
            heading.appendChild(toggleBtn);
            
            // Create content container
            const content = document.createElement('div');
            content.className = 'section-content';
            
            // Move section content into the container
            while (section.children.length > 1) {
                content.appendChild(section.children[1]);
            }
            section.appendChild(content);
            
            // Toggle functionality
            toggleBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const isVisible = content.style.display !== 'none';
                content.style.display = isVisible ? 'none' : 'block';
                toggleBtn.textContent = isVisible ? '▶' : '▼';
                toggleBtn.setAttribute('aria-expanded', !isVisible);
            });
        }
    });
}

// Feature 4: Click Counter for Skills Section
function initializeClickCounter() {
    const skillsSection = document.querySelector('section:nth-of-type(3)'); // Technical Skills section
    
    if (skillsSection) {
        const skillsList = skillsSection.querySelector('ul');
        let clickCount = 0;
        
        // Create counter display
        const counterDisplay = document.createElement('div');
        counterDisplay.className = 'click-counter';
        counterDisplay.textContent = `Skills clicked: ${clickCount}`;
        skillsSection.insertBefore(counterDisplay, skillsList);
        
        // Add click listeners to skill items
        const skills = skillsList.querySelectorAll('li');
        skills.forEach(skill => {
            skill.style.cursor = 'pointer';
            skill.addEventListener('click', function() {
                clickCount++;
                counterDisplay.textContent = `Skills clicked: ${clickCount}`;
                this.style.backgroundColor = '#e3f2fd';
                setTimeout(() => {
                    this.style.backgroundColor = 'transparent';
                }, 300);
            });
        });
    }
}

// Feature 5: Contact Form Validation and Handling
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name) {
                alert('Please enter your name!');
                return;
            }
            if (!email) {
                alert('Please enter your email!');
                return;
            }
            
            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address!');
                return;
            }
            
            if (!message) {
                alert('Please enter a message!');
                return;
            }
            
            // Success message
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
            
            // Log the data (in a real app, this would be sent to a server)
            console.log({
                name: name,
                email: email,
                message: message,
                timestamp: new Date().toLocaleString()
            });
            
            // Reset form
            contactForm.reset();
        });
    }
}
