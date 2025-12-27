document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form form");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Stop page reload

        // Get input values
        let fullName = document.querySelector("input[name='fullName']").value.trim();
        let email = document.querySelector("input[name='email']").value.trim();
        let service = document.querySelector("select[name='service']").value.trim();
        let message = document.querySelector("textarea[name='message']").value.trim();

        // WhatsApp number (international format)
        let phoneNumber = "212775461072";

        // Build WhatsApp message
        let whatsappMessage = `*Nouveau Message Depuis Votre Site Web*%0A%0A`
            + `👤 *Nom:* ${fullName}%0A`
            + `📧 *Email:* ${email}%0A`
            + `🛠️ *Service:* ${service}%0A`
            + `💬 *Message:* ${message}`;

        // WhatsApp link
        let whatsAppURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        // Open WhatsApp
        window.open(whatsAppURL, "_blank");
    });
});