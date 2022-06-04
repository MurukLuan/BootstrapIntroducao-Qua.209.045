let formulario = document.querySelector('#cadastro');

formulario.addEventListener('submit', function(pp){
    pp.preventDefault();

    let imptNome = pp.target.querySelector('#inputNome');
    let imptEmail = pp.target.querySelector('#inputEmail4');
    let imptEndereco = pp.target.querySelector('#inputAddress');
    let imptComplemento = pp.target.querySelector('#inputAddress2');
    let imptCidade = pp.target.querySelector('#inputCity');
    let imptEstado = pp.target.querySelector('#inputState')

    let nome = String(imptNome.value);
    let email = String(imptEmail.value);
    let endereco = String(imptEndereco.value);
    let complemento = String(imptComplemento.value);
    let cidade = String(imptCidade.value);
    let estado = String(imptEstado.value);

    let cadastrado = {"nome": nome, 
                    "email": email,
                    "endereco": endereco,
                    "complemento": complemento,
                    "cidade": cidade,
                    "estado": estado}

    let resNome = document.querySelector('#impNome');
    let resEmail = document.querySelector('#impEmail');
    let resEndereco = document.querySelector('#impEndereco');
    let resCidade = document.querySelector('#impCidade');
    let resEstado = document.querySelector('#impUf');
    let resComplemento = document.querySelector('#impComplemento');


    resNome.innerHTML = cadastrado.nome;
    resEmail.innerHTML = cadastrado.email;
    resEndereco.innerHTML = cadastrado.endereco;
    resComplemento.innerHTML = cadastrado.complemento;
    resCidade.innerHTML = cadastrado.cidade;
    resEstado.innerHTML = cadastrado.estado;
});