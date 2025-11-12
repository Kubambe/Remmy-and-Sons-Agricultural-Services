// Service descriptions
const serviceDescriptions = {
    'dam-digging': {
        title: 'Dam Digging Services',
        content: `
            <p>Professional dam excavation and site preparation services for agricultural water storage solutions.</p>
            <h3>What We Offer:</h3>
            <ul>
                <li>Site assessment and planning</li>
                <li>Heavy machinery operation</li>
                <li>Soil compaction and grading</li>
                <li>Water retention optimization</li>
                <li>Post-construction maintenance guidance</li>
            </ul>
            <p><strong>Duration:</strong> Typically 1-2 weeks depending on size</p>
            <p><strong>Equipment:</strong> Backhoes, excavators, and compactors</p>
        `
    },
    'poultry': {
        title: 'Poultry Farming',
        content: `
            <p>Comprehensive poultry farming solutions from setup to ongoing management.</p>
            <h3>Services Include:</h3>
            <ul>
                <li>Farm setup and coop construction</li>
                <li>Breed selection consultation</li>
                <li>Feeding and nutrition programs</li>
                <li>Disease prevention and management</li>
                <li>Production optimization strategies</li>
            </ul>
            <p><strong>Capacity:</strong> From backyard coops to commercial operations</p>
            <p><strong>Breeds:</strong> Layers, broilers, and dual-purpose varieties</p>
        `
    },
    'dairy': {
        title: 'Dairy Production',
        content: `
            <p>Complete dairy farming services ensuring optimal milk production and herd health.</p>
            <h3>Our Expertise:</h3>
            <ul>
                <li>Herd management and breeding programs</li>
                <li>Milking parlor setup and maintenance</li>
                <li>Nutrition and feed formulation</li>
                <li>Milk quality control and testing</li>
                <li>Veterinary care coordination</li>
            </ul>
            <p><strong>Production:</strong> Support for small to large-scale operations</p>
            <p><strong>Quality:</strong> Meeting Kenya Dairy Board standards</p>
        `
    },
    'delivery': {
        title: 'Egg & Milk Delivery',
        content: `
            <p>Fresh, reliable delivery of farm-fresh eggs and milk to your doorstep.</p>
            <h3>Delivery Details:</h3>
            <ul>
                <li>Daily fresh eggs from our farms</li>
                <li>Fresh milk delivered morning and evening</li>
                <li>Scheduled delivery routes in Nairobi and surrounding areas</li>
                <li>Bulk orders for restaurants and hotels</li>
                <li>Quality guaranteed or money back</li>
            </ul>
            <p><strong>Coverage:</strong> Nairobi County and neighboring regions</p>
            <p><strong>Minimum Order:</strong> Contact us for details</p>
        `
    },
    'dam-construction': {
        title: 'Dam Construction',
        content: `
            <p>Expert dam construction services for water storage and irrigation systems.</p>
            <h3>Construction Services:</h3>
            <ul>
                <li>Engineering and design consultation</li>
                <li>Foundation preparation and excavation</li>
                <li>Liner installation and waterproofing</li>
                <li>Spillway and inlet construction</li>
                <li>Long-term maintenance plans</li>
            </ul>
            <p><strong>Sizes:</strong> From small farm ponds to large agricultural reservoirs</p>
            <p><strong>Materials:</strong> Clay, concrete, and synthetic liners available</p>
        `
    },
    'incubation': {
        title: 'Incubation Services',
        content: `
            <p>Professional egg incubation services with high hatch rates and healthy chicks.</p>
            <h3>What We Provide:</h3>
            <ul>
                <li>Climate-controlled incubation chambers</li>
                <li>Egg candling and fertility testing</li>
                <li>Multiple species: chickens, ducks, quail</li>
                <li>Post-hatch chick care guidance</li>
                <li>Delivery of day-old chicks</li>
            </ul>
            <p><strong>Capacity:</strong> Up to 10,000 eggs per batch</p>
            <p><strong>Success Rate:</strong> 85-90% hatch rate</p>
        `
    },
    'consultation': {
        title: 'Farming Consultations',
        content: `
            <p>Expert agricultural consulting to help you maximize your farm's potential.</p>
            <h3>Consultation Areas:</h3>
            <ul>
                <li>Farm planning and layout optimization</li>
                <li>Crop rotation and soil management</li>
                <li>Livestock selection and breeding programs</li>
                <li>Financial planning and budgeting</li>
                <li>Sustainable farming practices</li>
                <li>Market access and selling strategies</li>
            </ul>
            <p><strong>Format:</strong> On-site visits or virtual consultations</p>
            <p><strong>Experience:</strong> Over 15 years in Kenyan agriculture</p>
        `
    }
};

// Section descriptions
const sectionDescriptions = {
    'about': {
        title: 'About Remmy And Sons Agricultural Services',
        content: `
            <p>Remmy And Sons Agricultural Services is a family-owned and operated agricultural enterprise based in Kenya, dedicated to providing comprehensive farming solutions since 2008.</p>
            
            <h3>Our Mission</h3>
            <p>To empower farmers with sustainable agricultural practices, quality livestock, and expert guidance that leads to profitable and environmentally responsible farming.</p>
            
            <h3>Our Values</h3>
            <ul>
                <li><strong>Quality:</strong> We maintain the highest standards in all our products and services</li>
                <li><strong>Sustainability:</strong> Environmentally conscious practices guide everything we do</li>
                <li><strong>Integrity:</strong> Honest, transparent dealings with all our clients</li>
                <li><strong>Innovation:</strong> Constantly improving and adopting best practices</li>
                <li><strong>Community:</strong> Supporting local farmers and communities</li>
            </ul>
            
            <h3>Why Choose Us</h3>
            <p>With over 15 years of experience in Kenyan agriculture, our team brings expertise across dairy, poultry, construction, and agricultural consulting. We understand the unique challenges of farming in Kenya and provide solutions that work.</p>
        `
    },
    'gallery': {
        title: 'Our Gallery',
        content: `
            <p>Browse through our collection of projects, farms, and success stories.</p>
            
            <h3>What You'll See</h3>
            <ul>
                <li>Completed dam construction projects across Kenya</li>
                <li>Our modern poultry facilities and happy, healthy flocks</li>
                <li>Dairy operations producing quality milk daily</li>
                <li>Before and after transformations of client farms</li>
                <li>Team members at work in the field</li>
                <li>Community events and training sessions</li>
            </ul>
            
            <p><strong>Featured Projects:</strong> From small family farms to commercial operations, we're proud of the work we do and the relationships we build.</p>
            
            <p>Want to see your project featured here? Contact us to get started!</p>
        `
    },
    'contact': {
        title: 'Contact Our Team',
        content: `
            <p>Get in touch with our team of agricultural experts. We're here to help with any questions or service inquiries.</p>
            
            <h3>Our Team</h3>
            
            <div class="contact-person">
                <h4>Remmy - Founder & Managing Director</h4>
                <p>📞 Phone: +254 712 345 678</p>
                <p>📧 Email: remmy@remmyandsons.co.ke</p>
                <p>Specialization: Farm management, dairy production, and business consultation</p>
            </div>
            
            <div class="contact-person">
                <h4>James - Operations Manager</h4>
                <p>📞 Phone: +254 723 456 789</p>
                <p>📧 Email: james@remmyandsons.co.ke</p>
                <p>Specialization: Dam construction, excavation services, and project management</p>
            </div>
            
            <div class="contact-person">
                <h4>Zachary - Poultry Specialist</h4>
                <p>📞 Phone: +254 734 567 890</p>
                <p>📧 Email: zachary@remmyandsons.co.ke</p>
                <p>Specialization: Poultry farming, incubation services, and bird health</p>
            </div>
            
            <div class="contact-person">
                <h4>Mariam - Client Relations & Delivery Coordinator</h4>
                <p>📞 Phone: +254 745 678 901</p>
                <p>📧 Email: mariam@remmyandsons.co.ke</p>
                <p>Specialization: Customer service, delivery scheduling, and order management</p>
            </div>
            
            <h3>Visit Us</h3>
            <p>📍 Office: Nairobi, Kenya</p>
            <p>🕐 Business Hours: Monday - Saturday, 8:00 AM - 6:00 PM</p>
            <p>🕐 Sunday: By appointment only</p>
            
            <h3>Emergency Contact</h3>
            <p>For urgent matters, call Remmy directly at +254 712 345 678</p>
        `
    }
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Navigation Toggle
const mobileNavButton = document.getElementById('mobileNavButton');
const navMenu = document.getElementById('navMenu');

mobileNavButton.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

function openModal(title, content) {
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Add click events to services
document.querySelectorAll('.clickable-service').forEach(service => {
    service.addEventListener('click', function() {
        const serviceType = this.getAttribute('data-service');
        const description = serviceDescriptions[serviceType];
        if (description) {
            openModal(description.title, description.content);
        }
    });
});

// Add click events to clickable sections
document.querySelectorAll('.clickable-section').forEach(section => {
    section.addEventListener('click', function() {
        const sectionId = this.getAttribute('id');
        const description = sectionDescriptions[sectionId];
        if (description) {
            openModal(description.title, description.content);
        }
    });
});