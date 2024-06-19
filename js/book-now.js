let form = document.querySelector('#bookingForm');
    form.addEventListener('submit',(event)=>{
        // Prevent submit
        event.preventDefault();
        // find inputs, textareas, and selects within the parent
        let children = event.target.querySelectorAll('input, textarea, select');
        // find if any of them are empty
        let findEmpty = Array.from(children).find((element)=>{
            if(element.value.length < 1){return true}
            return false
        });
        // check if found an empty child
        if(findEmpty){
            
            
        }else{
            // if not submit form
            event.target.submit();
        }
    }
);

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }
    
            form.classList.add('was-validated')
        }, false)
    })
})()