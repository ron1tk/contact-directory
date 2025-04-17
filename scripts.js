// Contact data - replace with your actual contacts
// Update the contactsData array to include LinkedIn instead of email/phone
const contactsData = [
    {
        id: 1,
        name: "Mariolga Reyes-Cruz",
        linkedin: "https://www.linkedin.com/in/mariolga-reyes-cruz/", // Replace with actual LinkedIn URL
        organization: "FiTiCAS",
        role: "Co-founder and Executive Director of FiTiCAS",
        description: "A Puerto Rican ecofeminist community psychologist, agroecology advocate, and documentary filmmaker, she co-founded FiTiCAS to promote food sovereignty and climate justice in Puerto Rico",
        image: "mariolgaPic.jpeg"
    },

    {
        id: 2,
        name: "JuanMa Pagán Teitelbaum",
        linkedin: "https://www.linkedin.com/in/mariolga-reyes-cruz/", // Replace with actual LinkedIn URL
        organization: "FiTiCAS",
        role: "Co-founder and Executive Director of FiTiCAS",
        description: "A documentary filmmaker and agroecological promoter, he grew up between a land rescue project and a housing cooperative. He earned his master's degree in film and Caribbean studies from the State University of New York at Buffalo. Together with Mariolga Reyes Cruz, he has made more than 30 short documentaries on sustainable agriculture and the feature film 'Serán las dueñas de la tierra' (They Will Be the Owners of the Land). His work has been instrumental in raising awareness of the agroecological movement in Puerto Rico and its struggles.",
        image: "juanmaPaganPic.png"
    },

    {
        id: 3,
        name: "Javier Vélez Roth",
        linkedin: "https://www.linkedin.com/in/javier-velez-roth/", // Replace with actual LinkedIn URL
        organization: "Fundación Borincana",
        role: "Coordinador de Proyectos",
        description: "A Program Associate at Fundación Borincana, he supports renewable energy projects and sustainable development initiatives in Puerto Rico",
        image: "javierVelezPic.jpeg"
    },
    // Update the rest of the contacts similarly
    {
        id: 4,
        name: "Juan Camacho",
        linkedin: "https://www.linkedin.com/in/juan-camacho/",
        organization: "FiTiCAS",
        role: "Especialista en Agricultura",
        description: "Ofrece apoyo técnico en prácticas agrícolas sostenibles y manejo de tierras.",
        image: "JuanCamachoPic.png"
    },
    {
        id: 5,
        name: "Ruz Deliz",
        linkedin: "https://www.linkedin.com/in/ruz-i-deliz-520a4590/",
        organization: "Cooperativa Agrícola El Coquí",
        role: "Coordinadora de Agricultura",
        description: "An environmental consultant and strategic advisor in Puerto Rico, she has expertise in grant management, disaster recovery, and nonprofit organizations.",
        image: "ruzDelizPic.jpeg"
    },
    {
        id: 6,
        name: "Tito Figueroa",
        linkedin: "N/A",
        organization: "Toro Negro Inc",
        role: "Asesor Legal",
        description: "Provee asesoramiento legal en temas de titularidad de tierras y políticas agrícolas.",
        image: "TitoPic.jpeg"
    },
    {
        id: 7,
        name: "Gaby Perez",
        linkedin: "https://www.linkedin.com/in/gabyperezsepulveda/",
        organization: "Movimiento Agroecológico",
        role: "Educadora Comunitaria",
        description: "Desarrolla programas educativos sobre agricultura sostenible para comunidades locales.",
        image: "GabyPerezPic.png"
    }, 
    {
        id: 8,
        name: "Ashley Ann Torres Rodríguez",
        linkedin: "https://www.linkedin.com/in/ashleyanntorresrodriguez/",
        organization: "FiTiCAS",
        role: "Communications Officer",
        description: "Agroecological communicator and promoter, she is a clinical herbalist in training and an ethnobotanist apprentice who seeks to sustain healthy communities by providing access to land for those who cultivate food and natural medicine in a fair and sustainable manner. She earned her bachelor's degree in Information and Journalism, with a minor in Political Science, from the University of Puerto Rico, Río Piedras Campus.",
        image: "ashleyPic.jpeg"
    }
];

// Organizations data
const organizationsData = [
    {
        id: 1,
        name: "FiTiCAS",
        description: "Fideicomiso de Tierras Comunitarias para la Agricultura Sostenible trabaja para asegurar el acceso perpetuo del campesinado puertorriqueño a tierras cultivables.",
        image: "fiticas-logo.png"
    },
    {
        id: 2,
        name: "Fundacion Boricana",
        description: "Organización cooperativa que apoya a agricultores locales en Puerto Rico para implementar prácticas sostenibles.",
        image: "coqui-logo.png" // Replace with actual image path
    },
    {
        id: 3,
        name: "Toro Negro Inc",
        description: "Organización dedicada a la promoción de la agroecología y la soberanía alimentaria en Puerto Rico.",
        image: "agroecologico-logo.png" // Replace with actual image path
    }
];

// Populate the contact map and organization section when the page loads
document.addEventListener('DOMContentLoaded', function() {
    populateContactMap();
    populateOrganizationSection();
});

// Function to populate the contact map
function populateContactMap() {
    const contactMap = document.getElementById('contactMap');
    contactMap.innerHTML = ''; // Clear existing content
    
    contactsData.forEach(contact => {
        const contactCard = document.createElement('div');
        contactCard.className = 'contact-card';
        contactCard.setAttribute('data-id', contact.id);
        contactCard.setAttribute('data-name', contact.name);
        contactCard.setAttribute('data-linkedin', contact.linkedin);
        contactCard.setAttribute('data-organization', contact.organization);
        
        contactCard.innerHTML = `
            <img src="${contact.image}" alt="${contact.name}" class="contact-image">
            <div class="contact-info">
                <h3>${contact.name}</h3>
                <p>${contact.role}</p>
            </div>
        `;
        
        contactCard.addEventListener('click', function() {
            openContactModal(contact);
        });
        
        contactMap.appendChild(contactCard);
    });
}

// Function to populate the organization section
function populateOrganizationSection() {
    const orgSection = document.getElementById('organizationSection');
    orgSection.innerHTML = ''; // Clear existing content
    
    organizationsData.forEach(org => {
        const orgCard = document.createElement('div');
        orgCard.className = 'org-card';
        orgCard.setAttribute('data-id', org.id);
        orgCard.setAttribute('data-name', org.name);
        
        orgCard.innerHTML = `
            <img src="${org.image}" alt="${org.name}" class="org-image">
            <div class="org-info">
                <h3>${org.name}</h3>
            </div>
        `;
        
        orgCard.addEventListener('click', function() {
            openOrganizationModal(org);
        });
        
        orgSection.appendChild(orgCard);
    });
}

// Function to filter contacts
function filterContacts() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const contactCards = document.querySelectorAll(".contact-card");

    contactCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        const organization = card.getAttribute('data-organization').toLowerCase();

        if (name.includes(input) || organization.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

// Function to open contact modal with details
function openContactModal(contact) {
    const modal = document.getElementById('contactModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <img src="${contact.image}" alt="${contact.name}" class="modal-image">
        <div class="modal-details">
            <h2>${contact.name}</h2>
            <p><strong>Rol:</strong> ${contact.role}</p>
            <p><strong>Organización:</strong> ${contact.organization}</p>
            <p><strong>LinkedIn:</strong> <a href="${contact.linkedin}" target="_blank">Ver perfil de LinkedIn</a></p>
            <p><strong>Descripción:</strong> ${contact.description}</p>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Function to open organization modal with member list
function openOrganizationModal(org) {
    const modal = document.getElementById('contactModal');
    const modalContent = document.getElementById('modalContent');
    
    // Find all contacts that belong to this organization
    const orgMembers = contactsData.filter(contact => contact.organization === org.name);
    
    let membersList = '';
    orgMembers.forEach(member => {
        membersList += `
            <div class="member-card" onclick="openContactModal(contactsData.find(c => c.id === ${member.id}))">
                <img src="${member.image}" alt="${member.name}" class="member-image">
                <div class="member-info">
                    <h4>${member.name}</h4>
                    <p>${member.role}</p>
                </div>
            </div>
        `;
    });
    
    modalContent.innerHTML = `
        <img src="${org.image}" alt="${org.name}" class="modal-image">
        <div class="modal-details">
            <h2>${org.name}</h2>
            <p>${org.description}</p>
            <h3>Miembros:</h3>
            <div class="members-container">
                ${membersList}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}