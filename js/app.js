function exibirInicial() {
  let list = document.getElementById("list");

  for (let i = 0; i < 4; i++) {
    list.innerHTML += `
    <a href="pg/detalhes.html?id=${galeriaFotos[i].id}"
         <div class="mb-3 mb-lg-0 mt-lg-4 space">
          <div class="card rounded-4 shadow p-3">
            <img
              src="${galeriaFotos[i].imagem}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
            <h4 class="text-center py-3 fw-bold">${galeriaFotos[i].titulo}</h4>
              <p class="card-text">
               ${galeriaFotos[i].descricao}
              </p>
            </div>
          </div>
        </div>
         </a>
        `;
  }
}

function exibirGaleria() {
  let galeria = document.getElementById("listGaleria");

  console.log(galeria);

  for (let i = 0; i < 10; i++) {
    galeria.innerHTML += `
        <a href="detalhes.html?id=${galeriaFotos[i].id}"
         <div class="mb-3 mb-lg-0 mt-lg-4 space">
          <div class="card rounded-4 shadow p-3">
            <img
              src="${galeriaFotos[i].imagem}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
            <h4 class="text-center py-3 fw-bold">${galeriaFotos[i].titulo}</h4>
              <p class="card-text">
               ${galeriaFotos[i].descricao}
              </p>
            </div>
          </div>
        </div>
        </a>
        `;
  }
}

function exibirDetalhes() {
  const parametro = new URLSearchParams(window.location.search);
  const id = parametro.get("id");
  let detalhes = document.getElementById("listDetalhes");
 for (let i = 0; i < galeriaFotos.length; i++) {

     if(id == galeriaFotos[i].id){

    detalhes.innerHTML=`
        <div class="w-100 d-flex justify-content-around align-items-center flex-wrap">

        <div>
            <img
            src="${galeriaFotos[i].imagem}"
            class="banner rounded"
            alt=""
            />
        </div>

            <div class="d-flex flex-column justify-content-center align-items-lg-start mt-lg-0 mt-4 mx-5 mx-lg-0">
                <h1 class="">${galeriaFotos[i].titulo}</h1>
                <span class="mt-2">Localização: ${galeriaFotos[i].localizacao}</span>
                <span class="mt-2">Data: ${galeriaFotos[i].data}</span>
                <span class="mt-2">Equipamento: ${galeriaFotos[i].equipamento}</span>
                <span class="mt-2">Tags: ${galeriaFotos[i].tags}</span>
                <span class="mt-2">Likes: ${galeriaFotos[i].likes}</span>
                <span class="mt-2">Licença: ${galeriaFotos[i].licenca}</span>
            </div>
        </div>

        <div class="alert border mt-5 p-5 w-100" role="alert">
          <h1 class="border-bottom">Descrição:</h1>
          <p class="mt-5">
         ${artigos[i].paragrafo01}
          </p>
        </div>
    `
  }
  }
}

function exibirEstudos() {
    let estudo = document.getElementById('estudos')
     for (let i = 0; i < 4; i++) {
        estudo.innerHTML+=`
          <div class="d-flex justify-content-center flex-wrap mb-5 py-3 border-bottom">

          <div class="">
            <img src="${galeriaFotos[i].imagem}" class="banner2 rounded" alt="">
          </div>
          
        <div class="mx-lg-5 mx-2 mt-lg-3 mt-5 w-50 text-mob">
          <h1 class="fw-bold text-lg-start text-center mb-lg-0 mb-5">Estudo de Caso: <span>${galeriaFotos[i].titulo}</span></h1>
          <h5 class="fw-bold mt-4">O Desafio</h5>
          <p>${artigos[i].paragrafo01}</p>
          
          
          <h5 class="fw-bold mt-4">A Solução</h5>
          <p>${artigos[i].paragrafo02}</p>
          
          
          <h5 class="fw-bold mt-4">Resultados e Impacto</h5>
          <p>${artigos[i].paragrafo03}</p>
        </div>
        
      </div>`
     }
}

function validarInput() {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let msg = document.getElementById('mensagem').value

    if(nome == '' || email == '' || msg == ''){
        alert('Preencha todos os campos')
    }else{
        document.getElementById('contato').innerHTML=`
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-verde">
              <i class="bi bi-patch-check contador bg-white rounded-circle text-verde fs-5 me-3"></i>
        <h1 class="modal-title fs-5" id="exampleModalLabel">Sucesso!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center py-5">
        <strong>Mensagem enviada com Sucesso !</strong>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-laranja" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
    }

}