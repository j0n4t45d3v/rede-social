const section = document.querySelector(".section");

async function geraComentario(div1){
    return await fetch('https://dummyjson.com/comments')
            .then( res => res.json())
            .then( res => {
                let random = Math.floor(Math.random() * res.comments.length); 
                const comment = res.comments[random];
                
                const div = document.createElement('div');
                const img = document.createElement('img');
                const p = document.createElement('p');
                const a = document.createElement('a');

                a.href = "usuario.html";
                img.src = "img/perfil.png";
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

async function geraPosts(){
    return await fetch('https://dummyjson.com/posts')
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

        img.src = "img/perfil.png";
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
        img.style = `
            width: 100%;
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



for(let i = 0; i < 30; i++){
    geraPosts();
}

