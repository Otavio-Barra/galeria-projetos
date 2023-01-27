let galeriaCards = document.querySelector(".container");

// json
const url = "cards.json";

function getDados() {
  fetch(url)
    .then((response) => response.json())
    .then((dados) => {
      if (dados.erro) {
        console.log("erro no JSON");
        return;
      }

      let empresas = dados.empresas;

      let lista = empresas.reduce((acc, dados) => {
        acc += `<article class="card">

        <div class="capa">
          <img src="./imgs/${dados.imgCapa}" class="img-capa" />
        </div>
  
  
        <div class="content">
          <h1 class="title">${dados.nomePagina}</h1>
          <div class="container-btn">
            <a href="${dados.linkDeploy}" target="_blank"><button><i
                  class="fa-solid fa-rocket"></i>Deploy</button></a>
            <a href="${dados.linkGit}" target="_blank"><button><i
                  class="fa-brands fa-github-alt"></i>Code</button></a>
          </div>
        </div>
  
      </article>`;

        return acc;
      }, "");

      galeriaCards.innerHTML = lista;
    });
}
getDados();
