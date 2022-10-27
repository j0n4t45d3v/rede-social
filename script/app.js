const section = document.querySelector(".section");



window.addEventListener("DOMContentLoaded", e => {

    fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(res => {
                const usuarioPrincipal = document.querySelector(".icon-usuario");
                const nomePrincipal = document.querySelector(".name-user");

                usuarioPrincipal.src = res.users[0].image;
                nomePrincipal.textContent = res.users[0].username;

                
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

                    div1.appendChild(div)
                })
    }


    for(let i = 0; i < 30; i++){

        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(res => {
                let random = Math.floor(Math.random() * res.posts.length); 
                const post = res.posts[random];
                
                const a = document.createElement("a");
                const img = document.createElement("img");
                const imgPost = document.createElement("img");
                const p = document.createElement("p");
                const h1 = document.createElement("h1");
                const div = document.createElement("div");
        
                user(img);
                imgPost.src = "https://imagens.mdig.com.br/thbs/45184mn.jpg";
        
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
        
                a.appendChild(img);
                div.appendChild(a);
                div.appendChild(imgPost);
                div.appendChild(h1);
                div.appendChild(p);
                geraComentario(div)
        
                section.appendChild(div)
            })
    }
})







