document.addEventListener('DOMContentLoaded', function () {
    // Attach an event listener to the form to handle the submit event
    document.getElementById('serviceForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        handleFormSubmission();  // Call the custom form submission handler
    });
    
    // Function to show the relevant fields based on the selected service
    window.showRelevantFields = function () {
        const serviceType = document.getElementById('serviceType').value;
        const huntFields = document.getElementById('huntFields');
        const homeRemovalFields = document.getElementById('homeRemovalFields');
        
        huntFields.classList.add('hidden');
        homeRemovalFields.classList.add('hidden');
        
        if (serviceType === 'hunt') {
            huntFields.classList.remove('hidden');
        } else if (serviceType === 'homeRemoval') {
            homeRemovalFields.classList.remove('hidden');
        }
    }

    // Function to handle the form submission
    function handleFormSubmission() {
        const serviceType = document.getElementById('serviceType').value;
        let formMessage = 'You have booked: ';

        if (serviceType === 'hunt') {
            const adults = document.getElementById('adults').value;
            const children = document.getElementById('children').value;
            formMessage += `Hunt with ${adults} adults and ${children} children.`;
        } else if (serviceType === 'homeRemoval') {
            const address = document.getElementById('address').value;
            formMessage += `Home Removal at address: ${address}.`;
        }

        document.getElementById('formMessage').innerText = formMessage;
    }
});