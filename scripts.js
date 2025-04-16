// Contact data - replace with your actual contacts
const contactsData = [
    {
        id: 1,
        name: "Mariolga Reyes-Cruz",
        email: "mariolga@fiticas.org",
        phone: "(123) 456-7890",
        organization: "FiTiCAS",
        role: "Directora Ejecutiva",
        description: "Lidera iniciativas para proteger tierras agrícolas y promover prácticas sostenibles en Puerto Rico.",
        image: "mariolgaPic.jpeg" // Replace with actual image path
    },
    {
        id: 2,
        name: "Javier Vélez Roth",
        email: "javier@fiticas.org",
        phone: "(234) 567-8901",
        organization: "FiTiCAS",
        role: "Coordinador de Proyectos",
        description: "Coordina proyectos comunitarios y maneja las relaciones con agricultores locales.",
        image: "placeholder-javier.jpg" // Replace with actual image path
    },
    {
        id: 3,
        name: "Juan Camacho",
        email: "juan@fiticas.org",
        phone: "(345) 678-9012",
        organization: "FiTiCAS",
        role: "Especialista en Agricultura",
        description: "Ofrece apoyo técnico en prácticas agrícolas sostenibles y manejo de tierras.",
        image: "placeholder-juan.jpg" // Replace with actual image path
    },
    {
        id: 4,
        name: "Ruz Deliz",
        email: "ana@fiticas.org",
        phone: "(456) 789-0123",
        organization: "Cooperativa Agrícola El Coquí",
        role: "Coordinadora de Agricultura",
        description: "Trabaja con agricultores locales para implementar prácticas sostenibles y mejorar la producción.",
        image: "ruzDelizPic.jpeg" // Replace with actual image path
    },
    {
        id: 5,
        name: "Carlos Rodríguez",
        email: "carlos@fiticas.org",
        phone: "(567) 890-1234",
        organization: "FiTiCAS",
        role: "Asesor Legal",
        description: "Provee asesoramiento legal en temas de titularidad de tierras y políticas agrícolas.",
        image: "placeholder-carlos.jpg" // Replace with actual image path
    },
    {
        id: 6,
        name: "Gaby Perez",
        email: "maria@fiticas.org",
        phone: "(678) 901-2345",
        organization: "Movimiento Agroecológico",
        role: "Educadora Comunitaria",
        description: "Desarrolla programas educativos sobre agricultura sostenible para comunidades locales.",
        image: "placeholder-maria.jpg" // Replace with actual image path
    }
];

// Populate the contact map when the page loads
document.addEventListener('DOMContentLoaded', function() {
    populateContactMap();
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
        contactCard.setAttribute('data-email', contact.email);
        contactCard.setAttribute('data-phone', contact.phone);
        
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

// Function to filter contacts
function filterContacts() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const contactCards = document.querySelectorAll(".contact-card");

    contactCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        const email = card.getAttribute('data-email').toLowerCase();
        const phone = card.getAttribute('data-phone').toLowerCase();

        if (name.includes(input) || email.includes(input) || phone.includes(input)) {
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
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>Teléfono:</strong> ${contact.phone}</p>
            <p><strong>Descripción:</strong> ${contact.description}</p>
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