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
        linkedin: "N/A", // Replace with actual LinkedIn URL
        organization: "FiTiCAS",
        role: "Board of Trustees FiTiCAS",
        description: "A documentary filmmaker and agroecological promoter, he grew up between a land rescue project and a housing cooperative. He earned his master's degree in film and Caribbean studies from the State University of New York at Buffalo. Together with Mariolga Reyes Cruz, he has made more than 30 short documentaries on sustainable agriculture and the feature film 'Serán las dueñas de la tierra' (They Will Be the Owners of the Land). His work has been instrumental in raising awareness of the agroecological movement in Puerto Rico and its struggles.",
        image: "juanmaPaganPic.png"
    },
  
    {
        id: 3,
        name: "Javier Vélez Roth",
        linkedin: "https://www.linkedin.com/in/javier-v%C3%A9lez-roth-55a885233/", // Replace with actual LinkedIn URL
        organization: "Fundacion Borincana",
        role: "PRECAP Program Associate",
        description: "Results-oriented bilingual professional with a focus on media, writing, research, public policy and consulting-driven organizations focusing on resilience and sustainability in the renewable energy sector. Working on and learning everyday about how to achieve goals aimed at community and economic development, based in Puerto Rico.",
        image: "javierVelezPic.jpeg"
    },
    // Update the rest of the contacts similarly
    {
        id: 4,
        name: "Juan Camacho",
        linkedin: "N/A",
        organization: "Other",
        role: "Especialista en Agricultura",
        description: "A Puerto Rican electrical engineer and energy expert with extensive experience in the energy sector.",
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
        image: "ashleyRodriguez.png"
    }, 

    {
        id: 9,
        name: "Carmen Rivera",
        linkedin: "N/A",
        organization: "El Bosque Modelo",
        role: "Secretary",
        description: "A Puerto Rican environmental leader and community organizer, recognized for her significant contributions to sustainable development and conservation efforts in Puerto Rico.",
        image: "carmen_pic.jpeg"
    }, 

    {
        id: 10,
        name: "Gina Malley Campos",
        linkedin: "N/A",
        organization: "Plenitud",
        role: "Associate Director",
        description: "A Puerto Rican environmental educator, activist, and community organizer dedicated to agroecology, decolonization, and holistic education. Her work spans grassroots initiatives, academic programs, and cultural storytelling, with a focus on reconnecting people to land, heritage, and healing",
        image: "gina_pic.png"
    }, 

    {
        id: 11,
        name: "Eunice Jiminez",
        linkedin: "N/A",
        organization: "La Goyco",
        role: "Media And Marketing Coordinator",
        description: "A prominent Puerto Rican cultural and community manager, recognized for her work in the organization and development of social and cultural projects in Puerto Rico.",
        image: "eunice_pic.jpg"
    },

    {
        id: 12,
        name: "Martin Cobian",
        linkedin: "N/A",
        organization: "AMA",
        role: "Co-founder and Agroecological Extension Coordinator",
        description: "A Puerto Rican anthropologist, educator, and community organizer dedicated to agroecology, mutual aid, and sustainable development. He is the co-founder of Apoyo Mutuo Agrícola (AMA), a grassroots initiative established in 2022 in response to Hurricane Fiona. AMA focuses on supporting small and medium-sized farmers in Puerto Rico by promoting agroecological practices, holistic health, and community resilience",
        image: "martin_pic.JPG"
    },

    {
        id: 13,
        name: "Doug Davis",
        linkedin: "https://www.linkedin.com/in/doug-davis-04622a30/",
        organization: "Astrawatt Solar Puerto Rico",
        role: "Commercial Sales Manager",
        description: "A passionate professional focused on decarbonization and energy efficiency, particularly in the renewable energy sector. He has a strong background as a Sales Engineer and Director of Sales Business Development, with experience in marketing and managing business relationships. Doug holds a BS in Engineering from Purdue University and has demonstrated leadership in deploying energy solutions like microgrids, photovoltaic (PV) systems, combined heat and power (CHP), and combined cooling, heating, and power (CCHP) applications across the U.S. He is particularly dedicated to helping Puerto Rico achieve its energy targets for 2050, emphasizing sustainable practices like solar power and energy storage. Doug has held key roles in companies such as Astrawatt Solar Puerto Rico, Dynamic Solar Solutions, and Lithion Battery Inc. His work has centered on promoting renewable energy, energy storage, and Distributed Energy Resource Management. ",
        image: "doug_pic.jpeg"
    }
];

// Organizations data
const organizationsData = [
    {
        id: 1,
        name: "FiTiCAS",
        description: "Fideicomiso de Tierras Comunitarias para la Agricultura Sostenible trabaja para asegurar el acceso perpetuo del campesinado puertorriqueño a tierras cultivables.",
        image: "fiticas-logo.png",
        traits: "Food sovereignty, Land stewardship, Agroecology"
    },
    {
        id: 2,
        name: "Fundacion Borincana",
        description: "Organización cooperativa que apoya a agricultores locales en Puerto Rico para implementar prácticas sostenibles.",
        image: "fundacionborincana_logo.jpeg",
        traits: "Renewable energy, Sustainability, Community development"
    },
    {
        id: 3,
        name: "Toro Negro Inc",
        description: "Organización dedicada a la promoción de la agroecología y la soberanía alimentaria en Puerto Rico.",
        image: "toro_negro.png",
        traits: "Legal advocacy, Land rights, Agricultural policy"
    },
    {
        id: 4,
        name: "Plenitud",
        description: "Plenitud PR is a nonprofit organization based in Las Marías, Puerto Rico, dedicated to fostering sustainability, community resilience, and holistic education. Established in 2008, it serves as an educational farm and community center that integrates permaculture, agroecology, and the arts to promote environmental stewardship and social well-being.",
        image: "plenitud.png",
        traits: "Permaculture, Education, Holistic wellness"
    },

    {
        id: 5,
        name: "El Bosque Modelo",
        description: "El Bosque Modelo de Puerto Rico is a pioneering conservation and sustainable development initiative that integrates environmental protection with community empowerment. Established through Law No. 182 of 2014, it became the first jurisdiction globally to legally designate a Model Forest, encompassing approximately 390,000 acres across 31 municipalities in the island's central-western region. ",
        image: "elboque_pic.png",
        traits: "Conservation, Sustainable forestry, Ecotourism"
    },

    {
        id: 6,
        name: "La Goyco",
        description: "La Goyco is a community cultural center located in Santurce, Puerto Rico, which emerged in 2015 when residents of the Machuchal and Loíza Street sectors occupied the former Pedro G. Goyco School to transform it into a space dedicated to culture, education, and community health.",
        image: "lagoyco_pic.png",
        traits: "Cultural heritage, Community arts, Urban renewal"
    },

    {
        id: 7,
        name: "AMA",
        description: "Apoyo Mutuo Agrícola (AMA) is a grassroots mutual aid organization established in 2022 in Puerto Rico, founded by Jessica Santos and Martín Cobian. AMA emerged in response to Hurricane Fiona, aiming to support small and medium-sized farmers by promoting agroecology, holistic health, and community resilience.",
        image: "ama_pic.jpeg",
        traits: "Disaster response, Mutual aid, Farmer support"
    },

    {
        id: 8,
        name: "Astrawatt Solar",
        description: "Astrawatt Solar Puerto Rico is a solar electric power generation company located in Trujillo Alto, Puerto Rico, with a team size of 51-200 employees. Their core mission is centered on the belief that everyone has the right to solar energy, striving to make the transition to solar power both easily accessible and a rewarding experience for customers. Operating under a franchise model, they recently held a summit at their new headquarters in Puerto Rico, highlighting their focus on collaboration, growth, and innovation within the solar industry to bring clean energy solutions to communities.",
        image: "astrawatt_pic.jpeg",
        traits: "Solar Energy, Collaborative"
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
    
    // Handle LinkedIn display - if LinkedIn is "N/A", just show text instead of a link
    const linkedInDisplay = contact.linkedin === "N/A" ? 
        `<p><strong>LinkedIn:</strong> N/A</p>` : 
        `<p><strong>LinkedIn:</strong> <a href="${contact.linkedin}" target="_blank">Ver perfil de LinkedIn</a></p>`;
    
    modalContent.innerHTML = `
        <img src="${contact.image}" alt="${contact.name}" class="modal-image">
        <div class="modal-details">
            <h2>${contact.name}</h2>
            <p><strong>Rol:</strong> ${contact.role}</p>
            <p><strong>Organización:</strong> ${contact.organization}</p>
            ${linkedInDisplay}
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
            <p><strong>Áreas:</strong> ${org.traits}</p>
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