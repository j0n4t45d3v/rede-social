window.addEventListener("DOMContentLoaded", e =>{
    e.preventDefault();
    const id = sessionStorage.getItem("dados");

    fetch(`https://dummyjson.com/users/${id}`)
    .then(res => res.json())
    .then(res => {
        const nome = document.querySelector(".title");
        
        const img = document.querySelector(".icon-user");
        const idade = document.querySelector("#idade");
        const nascimento = document.querySelector("#nascimento");
        const altura = document.querySelector("#altura");
        const genero = document.querySelector("#genero");
        const email = document.querySelector("#email");
        const telefone = document.querySelector("#telefone");
        img.src = res.image;

        nome.textContent = `${res.firstName} ${res.lastName}`;
        idade.textContent = res.age;
        nascimento.textContent = res.birthDate;
        altura.textContent = res.height;
        genero.textContent = res.gender;
        email.textContent = res.email;
        telefone.textContent = res.phone;
    })

})
