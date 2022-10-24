const section = document.querySelector(".section");

function geraPosts(){
    return fetch('https://dummyjson.com/posts')
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

        a.appendChild(img);
        div.appendChild(a);
        div.appendChild(imgPost);
        div.appendChild(h1);
        div.appendChild(p);

        imgPost.style = `
            width: 100%;
            border-radius: 10px;
            
        `
        img.style = `
            width: 10%;
            margin-bottom: 10px;
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
        section.appendChild(div)
    })

}

for(let i = 0; i < 30; i++){
    geraPosts();
}

