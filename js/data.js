addEventListener("DOMContentLoaded", async(e)=>{
    let data =  await (await fetch("data.json")).json();
    document.querySelector(".logo").insertAdjacentHTML("afterbegin", data.nombre);
    document.querySelector(".navbar").insertAdjacentHTML("afterbegin", /*html*/`
        <a href="${data.menu[0].link}" class="active">${data.menu[0].nombre}</a>
        <a href="${data.menu[1].link}">${data.menu[1].nombre}</a>
        <a href="${data.menu[2].link}">${data.menu[2].nombre}</a>
        <a href="${data.menu[3].link}">${data.menu[3].nombre}</a>
        <a href="${data.menu[4].link}">${data.menu[4].nombre}</a>
    `);
    document.querySelector(".home-content").insertAdjacentHTML("afterbegin", /*html*/`
        <h1>${data.parrafo.titulo[0]} <span>${data.parrafo.titulo[1]}</span><span class="animate" style="--i:2;"></span></h1>
        <div class="text-animate">
        <h3>${data.parrafo.subtitulo}</h3>
            <span class="animate" style="--i:3;"></span>
        </div>
        <p>${data.parrafo.descripcion}<span class="animate" style="--i:4;"></span></p>
        <div class="btn-box">
            <a href="${data.parrafo.botones[0].link}" class="btn">${data.parrafo.botones[0].nombre}</a>
            <a href="${data.parrafo.botones[0].link}" class="btn">${data.parrafo.botones[1].nombre}</a>
            <span class="animate" style="--i:5;"></span>
        </div>
    `)
    document.querySelector(".home-sci").insertAdjacentHTML("afterbegin", /*html*/`
        <a href="${data.parrafo.redes[0].link}"><i class='${data.parrafo.redes[0].nombre}'></i></a>
        <a href="${data.parrafo.redes[1].link}"><i class='${data.parrafo.redes[1].nombre}' ></i></a>
        <a href="${data.parrafo.redes[2].link}"><i class='${data.parrafo.redes[2].nombre}' ></i></a>
    `)
})