(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation');
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                console.log("Invalid.");
            }
            else 
            {
                console.log("Valid.");
                window.location.replace("http://www.w3schools.com");
            }
    
            form.classList.add('was-validated');

        }, false)
    })
})()