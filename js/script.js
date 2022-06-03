let container=document.querySelector('div');

for (let i=1;i <=10;i++){
    let titulo=document.createElement('h1');
    let subtitulo=document.createElement('h3');
    let image=document.createElement('img');
    
    const nombre_ciudad=prompt("por favor ingrese el nombre de la ciudad")
    const nombre_pais=prompt("por favor ingrese el nombre del pais al que pertenece la ciudad")
    const imagen_usuario=prompt("por favor ingrese el url de la imagen de la ciudad")
    
    titulo.textContent=nombre_ciudad;
    subtitulo.textContent=nombre_pais;
    image.setAttribute('src', imagen_usuario)
    image.setAttribute('alt', 'imagen')
    

    container.appendChild(titulo);
    container.appendChild(subtitulo);
    container.appendChild(image);

    image.height=200;
    image.width= 400;
}

container.classList(table)
console.log(titulo)
console.log(image)

