const perfilIcon = document.querySelector(".icon-usuario")

fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then((res) => {
        const user = res.users[0]
        perfilIcon.src = user.image
        console.log(user)
    })