const bodycat = document.querySelector('#bodygatos'); 
const botenviar= document.getElementById("botonenviar");

cargarEventListeners();

function cargarEventListeners(){
    botenviar.addEventListener('click', captardato);
}



function captardato(){
    const name = document.getElementById("formGroupExampleInput").value;
    const descrip = document.getElementById("formGroupExampleInput2").value;
    console.log(name);
    console.log(descrip);
    leerDatosCurso(name, descrip)
}

function leerDatosCurso(name, descrip){
    const row = document.createElement('div');
    row.classList.add("col")
    row.innerHTML = `
    
      <div class="card card-border shadow p-3 mb-5 bg-body rounded">
        <img loading="lazy" src="3.jfif" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${descrip}</p>
          <a href="https://wa.link/likqg0" target="_blank" class="btn btn-primary">Contactar</a>
        </div>
      </div>
    
`;
bodycat.appendChild(row);
};

