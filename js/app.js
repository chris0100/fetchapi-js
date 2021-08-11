
///////////////////////////////////////////////////////////////
//CARGAR UN ARCHIVO DE TEXTO
//////////////////////////////////////////////////////////////
document.getElementById('txtBtn').addEventListener('click', ()=>{

    //leer datos de un archivo de texto usando el fetch api.
    fetch('datos.txt')
       .then((res)=>{
           return res.text();
       })
        .then((data)=>{
            console.log(data);
            document.getElementById('resultado').innerHTML = data
        })
        .catch((error)=>{
            console.log(error);
        })
});




////////////////////////////////////////////////////////////////
//CARGANDO UN ARCHIVO JSON
///////////////////////////////////////////////////////////////

document.getElementById('jsonBtn').addEventListener('click', ()=>{

    fetch('empleados.json')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            let html = '';
            data.forEach(obj=>{
                html += `<li>${obj.nombre} ${obj.puesto}</li>`;
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch((error)=>{
            console.log(error);
        })
});



////////////////////////////////////////////////
//consumiendo una RESTAPI
////////////////////////////////////////////////
document.getElementById('apiBTN').addEventListener('click',()=>{

    fetch('https://picsum.photos/list')
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            let html = '';
            data.forEach(obj=>{
                html += `<li>${obj.author}  ${obj.id}</li>
                        <a href="${obj.post_url}">link image</a>`;
            });
            document.getElementById('resultado').innerHTML = html;
        })
});
























