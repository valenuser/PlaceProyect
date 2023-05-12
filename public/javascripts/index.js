const cards = document.getElementById('cards')

const postButtonFooter = document.getElementById('separacion-footer')

postButtonFooter.addEventListener('click',()=>{
    window.location = './post/post.html'
})

const postObject = [
    {
        imagen:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        usuario:'valenuser'
    },
    {
        imagen:'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg',
        usuario:'alfonsouser'
    },
    {
        imagen:'https://i.pinimg.com/564x/f9/39/f8/f939f81ef7a2068b02b91eb237eb97fd.jpg',
        usuario:'arnauuser'
    },
    {
        imagen:'https://www.civitatis.com/blog/wp-content/uploads/2020/05/8-paisajes-espana-extraordinarios.jpg',
        usuario:'abeluser'
    },
    ]

const posts = (data)=>{
    const div = document.createElement('div')
    div.className = 'imagenes-feed'
    div.innerHTML = `
    <div>
    <img class="resolucion-img-feed-1" src="${data.imagen}" alt="">
    </div>
    <div class="contenedor-feed-img-piepagina">
        <div class="usuario-e-icono">
            <i id="circulo-feed-piefoto" class="fa-regular fa-circle"></i>
            <p class="usuario-feed" >@${data.usuario}</p>
        </div>
        <div class="valoraciones-feed-iconos">
            <i id="estrella" class="fa-regular fa-star"></i>
            <i id="estrella" class="fa-regular fa-star"></i>
            <i id="estrella" class="fa-regular fa-star"></i>
            <i id="estrella" class="fa-regular fa-star"></i>
            <i id="estrella" class="fa-regular fa-star"></i>
        </div>
    </div> 
    `

    return div
}


postObject.forEach((d)=>{
    cards.appendChild(posts(d))
})
