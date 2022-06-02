window.addEventListener('DOMContentLoaded', () =>{

    const myForm = document.querySelector('form')
    const inputName = myForm.querySelector('#name');   
    const inputLastName = myForm.querySelector('#lastName');   
    const inputEmail = myForm.querySelector('#email');
    const inputPhone = myForm.querySelector('#phone');
    const inputKittens = myForm.querySelector('#gender');
    const inputAge = myForm.querySelector('#age');
    const submitButton = myForm.querySelector('#submit');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const adopterInfo ={
            name: inputName.value,
            lastName: inputLastName.value,
            email: inputEmail.value,
            phone: inputPhone.value,
            kittens: inputKittens.value,
            age: inputAge.value,
        }

        const oldData = JSON.parse(localStorage.getItem('data')) || [];
        const adoptionForm = [...oldData, adopterInfo];


        if (adopterInfo.name !== "" && adopterInfo.lastName !== "" &&  adopterInfo.email !== "" &&  adopterInfo.phone !== "" &&  adopterInfo.kittens !== "" &&  adopterInfo.age !== "") {
            localStorage.setItem('data', JSON.stringify(newArray));
            alert("Tu solicitud fue enviada");
        } else {
            alert("Es necesario que completes los datos");
        }
    })

})


