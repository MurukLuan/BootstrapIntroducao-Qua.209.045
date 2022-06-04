let formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(parametro){
    parametro.preventDefault();

    

    let inpNome = parametro.target.querySelector('#nomeE');
    let inpEmail = parametro.target.querySelector('#emailE');

    let nome = String(inpNome.value);
    let email = String(inpEmail.value);

    let meuJson = {"primeiro": nome, "segundo": email};
    //console.log(JSON.stringify(meuJson.primeiro))

    document.querySelector('#mostrar').innerHTML = meuJson.primeiro;
    document.querySelector('#mostrar').appendChild = meuJson.segundo;
    

    let resultadoNome = document.querySelector('#mostrarNome');
    let resultadoEmail = document.querySelector('#mostrarEmail'); 
   
    resultadoNome.innerHTML = nome;
    resultadoEmail.innerHTML = email;
    
    
});


