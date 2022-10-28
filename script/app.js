const section = document.querySelector(".section");



window.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();

    fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(res => {
                const usuarioPrincipal = document.querySelector(".icon-usuario");
                const nomePrincipal = document.querySelector(".name-user");

                const user = res.users[0];

                usuarioPrincipal.src = user.image;
                nomePrincipal.textContent = user.username;

                usuarioPrincipal.addEventListener("click", e =>{
                    sessionStorage.setItem("dados", user.image);
                })
                
                
            })

    async function user(img){
        let a = '';
        await fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(res => {
                let random = Math.floor(Math.random() * res.users.length);
                const user = res.users[random];

                let r = Math.random() * 255;
                let g = Math.random() * 255;
                let b = Math.random() * 255;

                img.style = `
                    width: 100%;
                    background-color: rgb(${r}, ${g}, ${b});
                    border-radius: 100%;
                `

                img.src= user.image;
                
            })
        
    }

    async function geraComentario(div1){
         await fetch('https://dummyjson.com/comments')
                .then( res => res.json())
                .then( res => {
                    let random = Math.floor(Math.random() * res.comments.length); 
                    const comment = res.comments[random];
                    
                    const div = document.createElement('div');
                    const img = document.createElement('img');
                    const p = document.createElement('p');
                    const a = document.createElement('a');

                    a.href = "usuario.html";
                    user(img);
                    p.textContent = comment.body;

                    a.appendChild(img);
                    div.appendChild(a);
                    div.appendChild(p);

                    a.style = `
                        display: flex;
                        align-items: center;
                        width: 8%;
                        height: 8%;
                        margin-right: 10px;
                        align-self: center;
                    `
                    img.style = `
                        width: 100%;
                    `

                    div.style = `
                        margin-top: 10px;
                        display: flex;
                        align-items: center;
                        border: 2px solid gray;
                        border-radius: 100px;
                        padding: 5px;
                        text-decoration: none;
                        color: black;
                    `

                    div1.addEventListener('click', e => {
                        sessionStorage.setItem('dados', img.getAttribute('src'));
                    })

                    div1.appendChild(div)
                })
    }

    const imgs = ['https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-486755202-768x512.jpg', 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-687112264-768x479.jpg',
    'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-869138876-768x513.jpg', 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-694634868-768x512.jpg', 
    'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-601901056-768x517.jpg','https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-178390705-768x512.jpg',
    'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-646190144-768x510.jpg','https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-628615976-768x512.jpg']

    for(let i = 0; i < 15; i++){

        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(res => {
                let random = Math.floor(Math.random() * res.posts.length); 
                const post = res.posts[random];
                let randomImgs = Math.floor(Math.random() * imgs.length)
                
                const a = document.createElement("a");
                const img = document.createElement("img");
                const imgPost = document.createElement("img");
                const p = document.createElement("p");
                const h1 = document.createElement("h1");
                const div = document.createElement("div");
        
                user(img);
                imgPost.src = imgs[randomImgs];
        
                a.href = "usuario.html";
                p.textContent = post.body;
                h1.textContent = post.title;
        
                imgPost.style = `
                    width: 100%;
                    border-radius: 10px;
                    
                `
                a.style = `
                    width: 10%; 
                    align-self: flex-end;
                `   
                h1.style = `
                    text-align: center;
                    margin-top: 10px;
                `
                div.style = `
                    display: flex;
                    flex-direction: column;
                    background-color: white;
                    width: 30%;
                    border-radius: 20px;
                    padding: 10px;
                    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.315);
                    margin: 20px;
                `
                
                img.addEventListener("click", e =>{
                    sessionStorage.setItem('dados', img.getAttribute('src'));
                })
                a.appendChild(img);
                div.appendChild(a);
                div.appendChild(imgPost);
                div.appendChild(h1);
                div.appendChild(p);
                geraComentario(div)
                sessionStorage.setItem("dados", img.getAttribute('src'));
                section.appendChild(div)
            })
    }
})







