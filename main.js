function scrolltoform() {
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
}

const expertsByService = {
    hardware: ["Janice", "Ryan", "Frank"],
    software: ["Ryan"],
    pc: ["Frank"]
};

document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById("appointmentForm");
    const helpForm = document.getElementById("helpForm");

    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const ConfirmationWindow = window.open('confirmation.html', 'Confirmation', 'width=600,height=400');
        document.getElementById('confirmation').style.display = 'block';
    });

    helpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const helpName = document.getElementById('helpName').value;
        const helpMessage = document.getElementById('helpMessage').value;
        console.log("Help Request:");
        console.log("Name:", helpName);
        console.log("Message:", helpMessage);

        const confirmationWindow = window.open('', 'Confirmation', 'width=600,height=400');
        confirmationWindow.document.write('<h2>Help Request Submitted</h2>');
        confirmationWindow.document.write('<p>Here is the zoom link : zoom.us/join?confno=8529015944&pwd=&uname=Nobody%20-%2051800000000.  </p>');
        confirmationWindow.document.write('<p> An expert will be joining shortly. </p>');

        

        helpForm.reset();
    });

    const serviceSelect = document.getElementById("serviceType");
    serviceSelect.addEventListener("change", updateExperts);

    function updateExperts() {
        const expertSelect = document.getElementById("expert");
        const selectedService = serviceSelect.value;
        const experts = expertsByService[selectedService] || [];
        expertSelect.innerHTML = "";
        experts.forEach(expert => {
            const option = new Option(expert, expert);
            expertSelect.add(option);
        });
    }

    updateExperts();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
