function scrolltoform() {
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
}

const expertsByService = {
    hardware: ["Janice", "Ryan", "Frank"],
    software: ["Ryan"],
    pc: ["Frank"]
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const ConfirmationWindow = window.open('confirmation.html', 'Confirmation', 'width=600,height=400');

        document.getElementById('confirmation').style.display = 'block';
    });

    const serviceSelect = document.getElementById("serviceType");

    serviceSelect.addEventListener("change", updateExperts);

    function updateExperts() {
        const expertSelect = document.getElementById("expert");
        const selectedService = serviceSelect.value;
        const experts = expertsByService[selectedService];

        expertSelect.innerHTML = "";

        if (experts) {
            experts.forEach(expert => {
                const option = document.createElement("option");
                option.text = expert;
                option.value = expert;
                expertSelect.add(option);
            });
        }
    }

    updateExperts(); // Initial population of experts dropdown
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

