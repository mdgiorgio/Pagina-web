window.addEventListener('DOMContentLoaded', () =>{

    const myForm = document.querySelector('form')
    const inputName = myForm.querySelector('#name');   
    const inputLastName = myForm.querySelector('#lastName');   
    const inputEmail = myForm.querySelector('#email');
    const inputTelephone = myForm.querySelector('#telephone');
    const inputKittens = myForm.querySelector('#gender');
    const inputAge = myForm.querySelector('#age');
    const submitButton = myForm.querySelector('#submit');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const adopterInformation ={
            name: inputName.value,
            lastName: inputLastName.value,
            email: inputEmail.value,
            telephone: inputTelephone.value,
            kittens: inputKittens.value,
            age: inputAge.value,
        }

        localStorage.setItem('adopterInformation', JSON.stringify(adopterInformation));
    })

})