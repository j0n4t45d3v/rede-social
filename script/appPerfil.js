

fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(res => {
        const a = sessionStorage.getItem("dados");
        let indice;

        for(let i = 0 ; i < res.users.length; i++){
            if(res.users[i].image == a){
                indice = i;
                break;
            }
        }
        
        const user = res.users[indice]

        const img = document.querySelector(".icon-user");
        const idade = document.querySelector("#idade");
        const nascimento = document.querySelector("#nascimento");
        const altura = document.querySelector("#altura");
        const genero = document.querySelector("#genero");
        const email = document.querySelector("#email");
        const telefone = document.querySelector("#telefone");
        img.src = user.image;

        idade.textContent = user.age;
        nascimento.textContent = user.birthDate;
        altura.textContent = user.height;
        genero.textContent = user.gender;
        email.textContent = user.email;
        telefone.textContent = user.phone;
    })
