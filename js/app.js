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

function exibirProjetos() {
  let projetos = document.getElementById("listProjetos");

  console.log(projetos);

  for (let i = 0; i < 10; i++) {
    projetos.innerHTML += `
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

function exibirGaleria() {
  let galeria = document.getElementById("listGaleria");

  console.log(galeria);

  for (let i = 0; i < 15; i++) {
    galeria.innerHTML += `
         <div class="mb-3 mb-lg-0 space">
          <div class="p-5 text-center">
            <img
              src="${listaFotos[i].imagem}"
              class="img-grid rounded"
              alt="..."
            />
            <div class="mt-3">
            <h4 class="text-center fw-bold">${listaFotos[i].nome}</h4>
            </div>
          </div>
        </div>
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
          <p class="mt-4">
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

function exibirSobre() {

  let missao = document.getElementById('missao')
  let visao = document.getElementById('visao')
  let valores = document.getElementById('valores')
  let btn1 = document.getElementById('btn1')
  let btn2 = document.getElementById('btn2')
  let btn3 = document.getElementById('btn3')
  let cont1 = document.getElementById('cont1')
  let cont2 = document.getElementById('cont2')
  let cont3 = document.getElementById('cont3')
  let options = ''

  for (let i = 0; i < 6; i++) {
    options += `<li>${poemas[i].titulo}</li>`  
  }
    
  missao.innerHTML = `${artigos[1].paragrafo01}`
  visao.innerHTML = `${artigos[1].paragrafo02}`
  valores.innerHTML = `${options}`
  
  btn1.innerText=`${noticias[1].titulo}`
  btn2.innerText=`${noticias[2].titulo}`
  btn3.innerText=`${noticias[3].titulo}`
  cont1.innerHTML=`${noticias[1].resumo}`
  cont2.innerHTML=`${noticias[2].resumo}`
  cont3.innerHTML=`${noticias[3].resumo}`
}

function exibirAjude() {
  let conteudo = document.getElementById('conteudo')
  
  for (let i = 1; i <= 5; i++) {

    conteudo.innerHTML+=`
     <div class="d-flex justify-content-center align-items-start flex-lg-nowrap flex-lg-nowrap flex-wrap mx-2 mb-5 py-3">
                <div class="mb-3 mb-lg-0">
                    <h3 class="rounded-circle contador bg-laranja px-3 py-1">${i}</h3>
                </div>

                <div class="d-flex flex-column align-items-lg-start px-3">
                    <h3 class="fw-bold">${artigos[i].titulo}</h3>
                    <p>${artigos[i].paragrafo02}</p>
                </div>
            </div>
`

  }

}