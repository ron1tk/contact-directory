function filterContacts() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const contacts = document.querySelectorAll(".contact");
    
    contacts.forEach(contact => {
        const name = contact.dataset.name.toLowerCase();
        const email = contact.dataset.email.toLowerCase();
        const phone = contact.dataset.phone.toLowerCase();

        if (name.includes(input) || email.includes(input) || phone.includes(input)) {
            contact.style.display = "";
        } else {
            contact.style.display = "none";
        }
    });
}