var alunos = 'EJGCHAVES';

function validarLeitura() {
  
  var divErro = document.querySelector('#msgErro');
  divErro.innerHTML = '';
  var texto = document.querySelector('#senha').value;
  

  if (texto == alunos) {
    document.querySelector('#leitura').innerHTML = leitura;
  }
  else {

    divErro.innerHTML = 'Senha incorreta. Tente novamente';
  }
}


function validar() {
  
  var divErro = document.querySelector('#msgErro');
  divErro.innerHTML = '';
  var texto = document.querySelector('#senha').value;
  

  if (texto == alunos) {
    document.querySelector('#datas').innerHTML = datas;
  }
  else {

    divErro.innerHTML = 'Senha incorreta. Tente novamente';
  }
}

function validarTarefas() {
  var divErro = document.querySelector('#msgErro');
  divErro.innerHTML = '';
  var texto = document.querySelector('#senha').value;
  var turma = document.querySelector('#turma').value;

  if (texto == alunos) {
    document.querySelector('#tarefas').innerHTML = getTurma(turma);
  }
  else {

    divErro.innerHTML = 'Senha incorreta. Tente novamente';
  }

}


var leitura =`        <section class="hero-wrap hero-wrap-2 banner" style=" background-image: url('images/lerarte.jpg');"></section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="text-center color1">
<div class="container">
            <h1>Projeto Leitura</h1>
            <h3>A literatura infantil nos leva a viajar com as crianças no universo das histórias contadas e recontadas.</h3>
            <h3>16/06 à 19/06 Livros:</h3>
            <p>Clique no livro para fazer o download</p>
            <div class="row">

                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                        <a href="./images/livros/livrosN/A_fada_faladeira_M.pdf" download="download"><img class="img-fluid" src="./images/livros/afadafala.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/Arthur.pdf" download="download"><img class="img-fluid" src="./images/livros/artur.jpg" alt=""></a>
            </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/As_Laranjas.pdf" download="download"><img class="img-fluid" src="./images/livros/aventuras.jpg" alt=""></a>
            </div>   
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/A_briga.pdf" download="download"><img class="img-fluid" src="./images/livros/briga.jpg" alt=""></a>
                </div>

            </div>
        </div>
    </div>
    </div>

    <div class="text-center color">
        <div class="container">
            <h1>Projeto Leitura</h1>
            <h3>É preciso que a leitura seja um ato de amor.</h3>
            <h3>22/06 à 26/06</h3>
            <p>Clique no livro para fazer o download</p>
            <div class="row">
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/Que_brinquedo.pdf" download="download"><img class="img-fluid" src="./images/livros/brinquedo.jpg" alt=""></a>
            </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/Bia_baixinha_M.pdf" download="download"><img class="img-fluid" src="./images/livros/bia.jpg" alt=""></a>
            </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/A_caixa_magica_de_Luiz_M.pdf" download="download"><img class="img-fluid" src="./images/livros/caixaa.jpg" alt=""></a>
            </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/Cantata.pdf" download="download"><img class="img-fluid" src="./images/livros/acantatadapata.jpg" alt=""></a>
            </div>
                </div>
            </div>
        </div>

    </div>

    <div class="text-center color2">
        <div class="container">
            <h1>Projeto Leitura</h1>
            <h3>Ler um bom livro é como conversar com as melhores mentes do passado.</h3>
            <h3>29/06 à 03/07</h3>
            <p>Clique no livro para fazer o download</p>
            <div class="row">
                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                    <a href="./images/livros/livrosN/Carambola.pdf" download="download"><img class="img-fluid" src="./images/livros/carambola.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                    <a href="./images/livros/livrosN/A_copa.pdf" download="download"><img class="img-fluid" src="./images/livros/copa.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                    <a href="./images/livros/livrosN/A_fada_das_folhas_M.pdf" download="download"> <img class="img-fluid" src="./images/livros/fada.jpg" alt=""></a>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                    <a href="./images/livros/livrosN/O_macaco_e_a_banana_M.pdf" download="download"><img class="img-fluid" src="./images/livros/macaco.jpg" alt=""></a>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <div class="text-center color">
        <div class="container">
            <h1>Projeto Leitura</h1>
            <h3>A leitura traz ao homem plenitude, o discurso segurança e a escrita precisão.</h3>
            <h3>06/07 à 10/07</h3>
            <p>Clique no livro para fazer o download</p>
            <div class="row">
                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                    <a href="./images/livros/livrosN/O_natal_de_Chico_em_Macacopolis_M.pdf" download="download"><img class="img-fluid" src="./images/livros/natal.jpg" alt=""></a>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                    <a href="./images/livros/livrosN/O_pato_viajante_M.pdf" download="download"><img class="img-fluid" src="./images/livros/opato.jpg" alt=""></a>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                    <a href="./images/livros/livrosN/A_patativa_e_a_margarida_M.pdf" download="download"><img class="img-fluid" src="./images/livros/patativa.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                    <a href="./images/livros/livrosN/Uriel.pdf" download="download"><img class="img-fluid" src="./images/livros/uriel.jpg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

     <div class="text-center color3">
        <div class="container">
            <h1>Projeto Leitura</h1>
            <h3>A alfabetização é mais,muito mais, do que ler e escrever.É a habilidade de ler o mundo.</h3>
            <h3>13/07 à 17/07</h3>
            <p>Clique no livro para fazer o download</p>
            <div class="row">

                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                        <a href="./images/livros/pdf/umsonho.pdf" download="download"><img class="img-fluid" src="./images/livros/sonho.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                        <a href="./images/livros/pdf/livro1.pdf" download="download"><img class="img-fluid" src="./images/livros/conto.jpg" alt=""></a>
                    </div>
                </div>
                   <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                        <a href="./images/livros/pdf/ajoaninha.pdf" download="download"><img class="img-fluid" src="./images/livros/joaninha.jpg" alt=""></a>
                    </div>
                </div>
                   <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                        <a href="./images/livros/pdf/Familia.pdf" download="download"><img class="img-fluid" src="./images/livros/familia.jpg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    <div class="text-center color">
        <div class="container">
            <h1>Projeto Leitura</h1>
            <h3>A literatura infantil nos leva a viajar com as crianças no universo das histórias contadas e recontadas.</h3>
            <h3>20/07 à 24/07</h3>
            <p>Clique no livro para fazer o download</p>
            <div class="row">

                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                        <a href="./images/livros/pdf/amenina.pdf" download="download"><img class="img-fluid" src="./images/livros/amenina.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                        <a href="./images/livros/pdf/duda.pdf" download="download"><img class="img-fluid" src="./images/livros/duda.jpg" alt=""></a>
                    </div>
                </div>
                   <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                        <a href="./images/livros/pdf/omenino.pdf" download="download"><img class="img-fluid" src="./images/livros/menino.jpg" alt=""></a>
                    </div>
                </div>
                   <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                        <a href="./images/livros/pdf/3mariasbolosmeninos.pdf" download="download"><img class="img-fluid" src="./images/livros/3marias.jpg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="text-center color1">
    <div class="container">
        <h1>Projeto Leitura</h1>
        <h3>É preciso que a leitura seja um ato de amor.</h3>
        <h3>27/07 à 31/07</h3>
        <p>Clique no livro para fazer o download</p>
        <div class="row">

                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                        <a href="./images/livros/livrosN/livro/A_vaca_amarela_e_a_panela_da_Clarabela_M.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/avaca.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/livro/As_aventuras_do_sapo_xue_M.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/sapo.jpg" alt=""></a>
            </div>
                </div>
                   <div class="col-lg-3 col-sm-12 livros-img">
                   <div class="marge">
                        <a href="./images/livros/livrosN/livro/Brincadeira_de_criança_M.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/brincadeira.jpg" alt=""></a>
                    </div>
                </div>
                   <div class="col-lg-3 col-sm-12 livros-img">
                   <div class="marge">
                   <a href="./images/livros/livrosN/livro/lobomau.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/lobo.jpg" alt=""></a>
               </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="text-center color">
<div class="container">
            <h1>Projeto Leitura</h1>
            <h3>A literatura infantil nos leva a viajar com as crianças no universo das histórias contadas e recontadas.</h3>
            <h3>Livros Extras</h3>
            <p>Clique no livro para fazer o download</p>
            <div class="row">

                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                    <a href="./images/livros/livrosN/livro/Floresta.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/confusao.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/livro/Dudu_e_o_carro_vermelho_M.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/dudu.jpeg" alt=""></a>
            </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/livro/Grilinho_cri_cri_M.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/grilinho.jpg" alt=""></a>
            </div>   
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/livro/casa.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/vovo.jpg" alt=""></a>
                </div>

            </div>
        </div>
    </div>
    </div>

    <div class="text-center color1">
        <div class="container">
            <h1>Projeto Leitura</h1>
            <h3>É preciso que a leitura seja um ato de amor.</h3>
            <h3>Livros Extras</h3>
            <p>Clique no livro para fazer o download</p>
            <div class="row">
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/livro/irmaoo.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/irmao.jpg" alt=""></a>
            </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/livro/Fada.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/nacasa.jpg" alt=""></a>
            </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/livro/circo.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/ocirco.jpg" alt=""></a>
            </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                <div class="marge">
                <a href="./images/livros/livrosN/livro/grito.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/ogrito.jpg" alt=""></a>
            </div>
                </div>
            </div>
        </div>

    </div>

    <div class="text-center color">
        <div class="container">
            <h1>Projeto Leitura</h1>
            <h3>Ler um bom livro é como conversar com as melhores mentes do passado.</h3>
            <h3>Livros Extras</h3>
            <p>Clique no livro para fazer o download</p>
            <div class="row">
                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                    <a href="./images/livros/livrosN/livro/vento.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/ovento.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                    <a href="./images/livros/livrosN/livro/Omarr.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/omar.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                    <a href="./images/livros/livrosN/livro/carneirinhos.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/ostres.jpg" alt=""></a>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-12 livros-img">
                    <div class="marge">
                    <a href="./images/livros/livrosN/livro/Peixinhoo.pdf" download="download"><img class="img-fluid" src="./images/livros/livrosN/livro/peixinho.jpg" alt=""></a>
                    </div>
                </div>

            </div>
        </div>

    </div>
</section>`;

var datas = `<section class="hero-wrap hero-wrap-2"
style="background-image: url('images/279359-saiba-como-sua-radio-pode-vender-mais-na-pascoa-636x363.jpg');">
<div class="overlay"></div>
<div class="container">
    <div class="row no-gutters slider-text align-items-center justify-content-center">
        <div class="col-md-9  text-center">
            <h1 class="mb-2 bread">Semana da Páscoa</h1>
            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i
                            class="ion-ios-arrow-forward"></i></a></span> <span> Semana da Páscoa <i
                        class="ion-ios-arrow-forward"></i></span></p>
        </div>
    </div>
</div>
</section>
<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
    <div class="row">
        <!-- <div class="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
  <div class="text px-4 ">
    <h2 class="mb-4">Bem vindo ao Colégio Jardim Getsêmani</h2>
    <p>Texto.</p>
    <p>Texto.</p>
    <p><a href="#" class="btn btn-secondary px-4 py-3">Read More</a></p>
  </div>
</div> -->
        <div class="col-md-7 wrap-about py-5 pr-md-4">
            <h2 class="mb-4">Semana da Páscoa (video 01) </h2>
            <h3 class="mb-4"> Amor Escrito com sangue</h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/0cVGDSOOaYg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <h2 class="mb-4">Semana da Páscoa (video 02) </h2>
            <h3 class="mb-4">Cristo, nosso criador </h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/0tPfRLcjVf4"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <h2 class="mb-4">Semana da Páscoa (video 03) </h2>
            <h3 class="mb-4"> Cristo nosso substituto</h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/V2l1CSrFlvA"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <h2 class="mb-4">Semana da Páscoa (video 04) </h2>
            <h3 class="mb-4"> Cristo, nosso primogênito</h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/cfWlDB65e3A"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <h2 class="mb-4">Semana da Páscoa (video 05) </h2>
            <h3 class="mb-4"> Cristo, nossa oferta</h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/4aan0msq5P0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <h2 class="mb-4">Semana da Páscoa (video 06) </h2>
            <h3 class="mb-4"> Cristo, nosso Advogado</h3>
            <div class="video-container">

                <iframe width="1311" height="480" src="https://www.youtube.com/embed/R8NVlz3Ngqg"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
     
            <h2 class="mb-4">Semana da Páscoa (video 07) </h2>
            <h3 class="mb-4"> Cristo, nosso Juiz</h3>
            <div class="video-container">

            <iframe width="1311" height="480" src="https://www.youtube.com/embed/o9-NJ7UHxPA" 
                   frameborder="0"
                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                   allowfullscreen></iframe>
           </div>

           <h2 class="mb-4">Semana da Páscoa (video 08) </h2>
           <h3 class="mb-4"> Cristo, nosso Rei</h3>
           <div class="video-container">

           <iframe width="1311" height="480" src="https://www.youtube.com/embed/hbC4wi_y2dM"
                   frameborder="0" 
                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                   allowfullscreen></iframe>
          
          </div>

       
        <h2 class="mb-4">Semana da Páscoa: </h2>
        <h3 class="mb-4"> A cada dia será postado um novo vídeo referente a semana da Páscoa, em seguida disponível para
            download ideias caseiras para crianças, caderno de atividades e livro A história da páscoa. </h3>
        <ul>
            <li><a class="lista-sugestoes" href="./sugestoes/SemanaSanta.pdf">Caderno de atividades</a></li>
            <li><a class="lista-sugestoes" href="./sugestoes/IdeiasCaseiras.pdf">Ideias caseiras para crianças</a></li>
            <li><a class="lista-sugestoes" href="./sugestoes/AHistóriadaPáscoa.pdf">A hitória da Páscoa</a></li>
        </ul>
        </div>
</section>`;

function getTurma(turma) {
  if (turma == 1) {
    return (bercario);
  }
  if (turma == 2) {
    return (turma2);
  }
  if (turma == 3) {
    return (turma3);
  }
  if (turma == 4) {
    return (turma4);
  }
  if (turma == 5) {
    return (turma5);
  }
  if (turma == 6) {
    return (turma6);
  }
  if (turma == 7) {
    return (turma7);
  }
  if (turma == 8) {
    return (turma8);
  }
  if (turma == 9) {
    return (turma9);
  }
}

var bercario = `<section class="hero-wrap hero-wrap-2" style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">

<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs">
        <span class="mr-2">
          <a href="./index.html">Home
            <i class="ion-ios-arrow-forward"></i>
          </a>
        </span>
        <span>Tarefas
          <i class="ion-ios-arrow-forward"></i>
        </span>
        <span>Berçário I & II
          <i class="ion-ios-arrow-forward"></i>
        </span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="text-center">
<div class="video-aula">
<h1>Aulas online</h1>
<h3>Senhores pais e/ou responsáveis, acesso as aulas remotas mediada por tecnologia.</h3>
<a class=" btn btn-secondary px-4 py-3 mt-3"  href="https://meet.jit.si/colegiogetsemaniberçario"> Clique para acessar a aula </a>
</div>
 <div class="container">
    <h1 class="mb-4">
      Recado aos pais e/ou responsáveis:
    </h1>
    <h3 class="mb-4">
      Querida FAMÍLIA, ajude os nossos BEBÊS a realizar as atividades. Dê um lindo colorido em cada imagem. Usem a criatividade e caprichem !
    </h3>
    <h2 class="mb-4">Vídeo Aula semanal
    </h2>
    <h3 class="mb-4">
      Educação Infantil</h3>
    <h3 class="mb-4">
      Berçário I & II
    </h3>
    </div>
 </div>
</section>


<section>
<div class="video1">
     <div class="container">
          <h3 class="titulob"> Vídeo educativo </h3>
        <div class="video-container">

          <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

         </div>
    </div>
</div>

<div class="video">
    <div class="container">
         <h3 class="titulo">Vídeo aula 01</h3>
         <div class="video-container">
                     <iframe width="1311" height="480" src="https://www.youtube.com/embed/Djl6rMmzl7M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
         </div>
    </div>
</div>


<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 02</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/fUNoZc_FY1k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>


<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 03</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/FY7fDIGMEas" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>


<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 04</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/m6xCuqMvb7A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>


<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 05</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/3E145UlE1fE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>


<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 06</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/dxuI0RVNA4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 07 (Formas Geométricas 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/AJXH-EPipzY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 08 (Formas Geométricas 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/RTpzYDB7WGc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 09 (Vogais)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ry53Tx5SWd0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 10 (Cores)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/_lCFJFzkDPE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 11</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/TQ7Epb0sheM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 12 (Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/o3pxCTaG8gE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 13 (Vogais)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/BqcQ4-sugEQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 14 (Datas Comemorativas)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/MAN7_IuUhzM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 15 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/o-yYqwuHDCQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 16</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/YoWEaJ-N5EM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 17 (Alimentação Saudável)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/UxGUsbzciP0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 18</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/wD_Pe-fZK4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 19</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/tPtFLIGkyjY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 20 (Inglês)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Vul7XAJH3rM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 21</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/AzQundWu4k4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 22</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/4-czDZU_cSA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 23</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/hN7rzZY_9k0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 24</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/yDqzExkPHw4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 25</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/NT1x-3uu06Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 26</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/3ATdKBLNOPg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 27</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/gEoMF562G0E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 28</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/tIJGzFpnl4s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 29</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/U7tbjNq8lDU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 30</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/hHyMF9_XWEk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 31</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/csJ08kCNxiY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 32</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/XvfYJrNF2Sk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 33</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ErcMDvBAwCU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 34 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/8M1PPgE-HU4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 35</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/3CRQFW4zeAU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 36</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/mPCZi32mjKw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 37</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/bqdjM5eyQV0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 38</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/-He_OXs5Bc0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 39</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/tdQqehM_w8E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 40</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/fDveyvd51jo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 41</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/msju3PTmmKs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 42</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/dXNh5cDMtGI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 43</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/07N4RrDgIaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 44</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/VH-evexL0fc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>


<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 45</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/l1_KnOCUNGE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 46</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/qc37rueBd3k" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 47</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/duhyUVnTgkU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 48</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/r-s886UJLlQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 49</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/G7heuhSN6Xg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 50</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/DWQpT_zf0Ko" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 51</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/wpwPfwWlNvQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 52</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/EQYnz-XQTV0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 53</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/h7omlARyOaQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 54</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/I4oXP620Its" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 55</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/hpzAFtmLZUE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 56</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/38ozy7ItGik" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 57</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/3Gf90NZAIzw" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 58</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/dLOuEl46j2M" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 59</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/HoKuXo7tY1A" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 60</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/AwvPK2sFzQo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 61 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/vaMNHbrT7z4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 62 </h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/AR2X68xQu1E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 63</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/TtMZ_iogPh0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 64 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/CWwNnwsWnTs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 65</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/SqsC1yK48yU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 66</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/5ECnDx0Vt_c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 67</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/WaGXQZ7-T_8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 68</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/b9pKyPFlhRE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 69</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/XU32mW_2GeM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 70</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/xjOoe261J6w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 71</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/85E5iYajD6Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 72</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/Ofom6YumVk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 73</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/DN4-rh6Nb5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 74</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/yFa9MojF_UI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 75</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/ILAzyZLjDDg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 76</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/sOwRIhEhZdk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 77</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/kX74i_-jJ-U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 78</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/QBuVSzMpWVs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 79</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/suBFfKDCx2k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 80</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/lWTydV4g5vU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 81</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/Z9-IsNqnN10" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 82</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/m7KdpXBN5S0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 83</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/-ZEf1NYlw8M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 84</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/JZG3VciLhxs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 85</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/xdQR70VV4nU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 86</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/DY_IioH0EZA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 87</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/q4RP2Vrc5NU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>


</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 23 <br> 31/agosto até 06/setembro</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Berçário I & II </h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana23/img1.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana23/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/berçario/semana23/img2.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana23/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana23/img3.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana23/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/berçario/semana23/img4.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana23/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana23/img5.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana23/img5.jpg" alt=""></a>
      </div>
     </div>
  </div>
  </div>
  </section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 22 <br> 24/agosto até 30/agosto</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Berçário I & II </h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana22/img1.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana22/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/berçario/semana22/img2.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana22/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana22/img3.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana22/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/berçario/semana22/img4.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana22/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana22/img5.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana22/img5.jpg" alt=""></a>
      </div>
     </div>
  </div>
  </div>
  </section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 21 <br> 17/agosto até 23/agosto</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Berçário I & II </h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana21/img1.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana21/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/berçario/semana21/img2.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana21/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana21/img3.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana21/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/berçario/semana21/img4.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana21/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana21/img5.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana21/img5.jpg" alt=""></a>
      </div>
     </div>
  </div>
  </div>
  </section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 20 <br> 10/agosto até 16/agosto</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Berçário I & II </h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana20/img1.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana20/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/berçario/semana20/img2.png" download> <img class="img-fluid"
            src="./images/berçario/semana20/img2.png" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana20/img3.png" download> <img class="img-fluid"
            src="./images/berçario/semana20/img3.png" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/berçario/semana20/img4.jpg" download> <img class="img-fluid"
            src="./images/berçario/semana20/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana20/img5.png" download> <img class="img-fluid"
            src="./images/berçario/semana20/img5.png" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/berçario/semana20/img6.png" download> <img class="img-fluid"
            src="./images/berçario/semana20/img6.png" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/berçario/semana20/img7.png" download> <img class="img-fluid"
            src="./images/berçario/semana20/img7.png" alt=""></a>
      </div>
      </div>
     </div>
  </div>
  </div>
  </section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
   <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 19<br> - 03/agosto até 09/agosto</h1>
       <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
     
      <p>Clique nas imagens para baixar a tarefa</p>

    </div>
   </div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana19/img1.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana19/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana19/img2.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana19/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana19/img3.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana19/img3.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana19/img4.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana19/img4.jpeg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana19/img5.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana19/img5.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana19/img6.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana19/img6.png" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana19/img7.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana19/img7.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana19/img8.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana19/img8.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana19/img9.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana19/img9.jpg" alt=""></a>
    </div>
    </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
   <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 18<br> - 27/julho até 02/agosto</h1>
       <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
     
      <p>Clique nas imagens para baixar a tarefa</p>

    </div>
   </div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana18/img1.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana18/img1.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana18/img2.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana18/img2.png" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana18/img3.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana18/img3.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana18/img4.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana18/img4.png" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana18/img5.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana18/img5.png" alt=""></a>
    </div>
    </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
   <div class="text-center prova">
      <h1 class="mb-4">Tarefa semanal 17<br> - 20/julho até 26/julho</h1>
       <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
     
        <h1 class="color">(Recesso escolar)</h1>

    </div>
   </div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
   <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 16<br> - 13/julho até 19/julho</h1>
       <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
     
      <p>Clique nas imagens para baixar a tarefa</p>

    </div>
   </div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana16/img1.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana16/img1.jpeg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana16/img2.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana16/img2.png" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana16/img3.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana16/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana16/img4.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana16/img4.png" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana16/img5.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana16/img5.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana16/img6.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana16/img6.png" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana16/img7.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana16/img7.png" alt=""></a>
    </div>
    </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
   <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 15<br> - 06/julho até 12/julho</h1>
       <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
     
      <p>Clique nas imagens para baixar a tarefa</p>

    </div>
   </div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana15/img1.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana15/img1.jpeg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana15/img2.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana15/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana15/img3.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana15/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana15/img4.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana15/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana15/img5.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana15/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana15/img6.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana15/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana15/img7.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana15/img7.jpg" alt=""></a>
    </div>
    </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
   <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 14<br> - 29/junho até 05/julho</h1>
       <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
     
      <p>Clique nas imagens para baixar a tarefa</p>

    </div>
   </div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana14/img1.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana14/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana14/img2.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana14/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana14/img3.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana14/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana14/img4.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana14/img4.jpeg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana14/img5.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana14/img5.jpeg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana14/img6.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana14/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana14/img7.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana14/img7.jpg" alt=""></a>
    </div>
  <div class="col-sm">
      <a href="./images/berçario/semana14/img8.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana14/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana14/img9.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana14/img9.jpg" alt=""></a>
    </div>
    </div>
</div>
</div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
<div class="container">
      <div class="text-center">
      
      <h1 class="color">(Provinha Infantil)<h1>
        <h2 class="mb-4">Tarefa semanal 12 - 15/junho até 22/junho</h2>
        <h3 class=mb-4>Educação Infantil</h3>
        <h3 class=mb-4> Berçário I e II </h3>
        <p>Clique na imagem para baixar a prova</p>
      
      </div>
   

  <div class="text-center tarefas-img1">
    <div class="row">
        <div class="col-sm">
            <a href="./images/berçario/semana12/berçario.pdf" download="download">
            <img class="img-fluid" src="./images/provinha.jpg" alt=""></a>
        </div>
     </div>
   </div>
        
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
   <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 11 (Semana de Revisão)<br> - 08/junho até 15/junho</h1>
      <h5 class="mb-4">
      Mamãe e Papai, essa semana estaremos trabalhando com os vegetais.<br>
      Hum que gostoso, quantas vitaminas temos!<br>
      Pinte de acordo com as cores dos vegetais!</h5>
      <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
     
      <p>Clique nas imagens para baixar a tarefa</p>

    </div>
   </div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana11/img1.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana11/img1.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana11/img2.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana11/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana11/img3.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana11/img3.jpeg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana11/img4.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana11/img4.jpeg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana11/img5.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana11/img5.jpeg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana11/img6.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana11/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana11/img7.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana11/img7.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
   <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 10 - 01/junho até 05/junho</h1>
      <h5 class="mb-4">
      Mamãe e Papai, essa semana estaremos trabalhando com a Família.<br>
      Vamos colorir cada desenho de forma especial.<br>
      Imagino que vai ficar lindo! Caprichem!</h5>
      <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
     
      <p>Clique nas imagens para baixar a tarefa</p>

    </div>
   </div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana10/img1.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana10/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana10/img2.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana10/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana10/img3.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana10/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana10/img4.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana10/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana10/img5.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana10/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana10/img6.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana10/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana10/img7.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana10/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana10/img8.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana10/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana10/img9.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana10/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana10/img10.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana10/img10.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana10/img11.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana10/img11.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 09 - 25/maio até 29/maio</h1>
      <h5 class="mb-4">
        Mamãe e Papai, essa semana vamos está trabalhando com brinquedos. Nossa, é o que mais eles gostam!<br>
         Vamos colorir cada um e o de preferência da criança faça uma linda colagem. <br>
         Imagino que vai ficar lindo! Caprichem!</h5>
      <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
      
      <p>Clique nas imagens para baixar a tarefa</p>

    
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana9/img1.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana9/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana9/img2.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana9/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana9/img3.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana9/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana9/img4.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana9/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana9/img5.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana9/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana9/img6.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana9/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana9/img7.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana9/img7.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 08 - 18/maio até 22/maio</h1>
      <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
      <h5 class="mb-4">
        Essa semana vamos trabalhar com os SENTIDOS.Que fantástico, mamãe e papai vamos lá! Coloque às crianças para vê e ouvir à música dos sentidos, em seguida faça a dinâmica com eles, e depois vamos dar um lindo COLORIDO em cada imagens ok! Como sempre Capriche!</h5>
      

    </div>
 </div>
</section>

<section>

<div class="container">

  <h6>
    Em um mundo cada vez mais digital, é necessário pensar em formas mais lúdicas e naturais para o desenvolvimento das crianças. E a forma mais eficaz de fazer isso é por meio das brincadeiras.</h6>
  <h6>Qualquer brincadeira serve para estimular o aprendizado e o desenvolvimento dos 5 sentidos? De certa forma, sim. Porém, algumas atividades possuem uma capacidade maior de impulsionar as habilidades infantis. Quanto mais sentidos a brincadeira envolver, mais ela estará estimulando o desenvolvimento da criança.</h6>
  <h6>Pensando nisso, separamos uma série de atividades para que você possa aliar diversão ao aprendizado da criança.</h6>
  <div class="video-container">

    <iframe width="1311" height="480" src="https://www.youtube.com/embed/NaTcJL2bMPs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

  </div>
</div>
<div class="col-md-7 wrap-about py-5 pr-md-4 "></div>
<div class="container">
  <h3 class="text-center">Tato</h3>
  <h5>Para ajudar a desenvolver o tato, espalhe brinquedos de encaixe pelo chão, dominós coloridos e quebra-cabeças com peças grandes e firmes e ajude seu filho a compreender os encaixes. Brinquedos de madeira também são uma ótima opção, pois esse tipo de material é mais durável e mais seguro.</h5>
  <p>Clique na imagen para baixar a tarefa</p>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana8/img1.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana8/img1.jpg" alt=""></a>
    </div>
  </div>
  <div class="container">
    <h3 class="text-center">Visão</h3>
    <h5>As crianças costumam gostar de desenhar e colorir. E essas atividades são ótimas para desenvolver a visão. Para intensificar a aprendizagem das cores, você pode levar a criança a um parque para observar a cor do céu, da grama, das flores. Depois, você pode até dizer a ela para colorir desenhos utilizando as cores que viu na natureza.</h5>
    <p>Clique na imagen para baixar a tarefa</p>
    <div class="col-sm">
      <a href="./images/berçario/semana8/img2.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana8/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="container">
    <h3 class="text-center">Audição</h3>
    <h5>As crianças devem aprender a escutar de maneira efetiva. Por isso, uma ótima brincadeira é colocar músicas com estilos e ritmos diferentes e pedir para que ela faça movimentos coordenados com a música. Outra ideia é pedir para que a criança feche os olhos e adivinhe os sons. Ela pode tentar identificar qual é o som da voz do papai, o barulho de um sapato batendo no chão, o som de um chocalho.</h5>
    <p>Clique na imagen para baixar a tarefa</p>
    <div class="col-sm">
      <a href="./images/berçario/semana8/img3.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana8/img3.jpg" alt=""></a>
    </div>
  </div>
  <div class="container">
    <h3 class="text-center">Olfato</h3>
    <h5>Um bom jeito de estimular o olfato é por meio de brincadeiras que envolvam cheiros. Você pode, por exemplo, separar potes contendo cravo-da-índia, canela em pau, café, alecrim e um algodão embebido em essência de baunilha. Convide a criança a cheirar cada um. Em seguida, faça sachês com eles e espalhe pela casa, para que a criança procure e tente identificar cada aroma.</h5>
    <p>Clique na imagen para baixar a tarefa</p>
    <div class="col-sm">
      <a href="./images/berçario/semana8/img4.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana8/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="container">
    <h3 class="text-center">Paladar</h3>
    <h5>A hora de comer é o momento em que a criança mais exercita o paladar. Apresente novas texturas e sabores a ele periodicamente. Você pode leva-lo à feira e pedir para que ele escolha algumas frutas, por exemplo. Antes de comer, vocês podem analisar as cores, texturas e cheiros das frutas, envolvendo vários sentidos na brincadeira. Peça também para ele descrever o sabor da fruta que está provando.</h5>
    <p>Clique na imagen para baixar a tarefa</p>
    <div class="col-sm">
      <a href="./images/berçario/semana8/img5.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana8/img5.jpg" alt=""></a>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 07 - 13/maio até 15/maio</h1>
      <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
      <h3 class="mb-4">
        Essa semana vamos trabalhar com os animais. Quero ver vocês imitando o som dos bichinhos junto da mamãe e do papai,<br> depois pinte cada um com sua cor correta. Mamãe e papai mais uma vez conto com vocês. Caprichem!</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
</div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana7/img1.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana7/img1.jpeg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana7/img2.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana7/img2.jpeg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana7/img3.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana7/img3.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana7/img4.png" download="download">
        <img class="img-fluid" src="./images/berçario/semana7/img4.png" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana7/img5.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana7/img5.jpeg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana7/img6.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana7/img6.jpeg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana7/img7.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana7/img7.jpeg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana7/img8.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana7/img8.jpeg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana7/img9.jpeg" download="download">
        <img class="img-fluid" src="./images/berçario/semana7/img9.jpeg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
    
      <h1 class="mb-4">Tarefa semanal 06 - 02/maio até 12/maio</h1>
      <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
        <h1 class="mb-4 color"> (Trabalho dirigido) </h1>

    
    
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
    
      <h1 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h1>
      <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
      <p>Clique nas imagens para baixar a tarefa</p>

    
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana5/img1.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana5/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana5/img2.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana5/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana5/img3.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana5/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana5/img4.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana5/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana5/img5.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana5/img5.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h1>
      <h3 class="mb-4">
        Educação Infantil</h3>
      <h3 class="mb-4">
        Turma Berçário I & II</h3>
      <p>Clique nas imagens para baixar a tarefa</p>

    
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana4/img1.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana4/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/berçario/semana4/img2.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana4/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/berçario/semana4/img3.jpg" download="download">
        <img class="img-fluid" src="./images/berçario/semana4/img3.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      <h1 class="mb-4">Vídeos da Tarefa semanal - 06/abril até 10/abril (vídeo 01)</h1>
      <h3 class="mb-6">Faça o desenho do CARANGUEJO com o auxílio da mamãe e DEPOIS COLE COM PAPEL LARANJA.</h3>
      <div class="video-container">

       <iframe width="1311" height="480" src="https://www.youtube.com/embed/h9DDiQLAVW0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

      </div>
      <h2 class="mb-4">Vídeos da Tarefa semanal - 06/abril até 10/abril(vídeo 02)</h2>
      <h3 class="mb-4">Faça um painel de CORES com ajuda da mamãe. CAPRICHE!</h3>
      <div class="video-container">

      <iframe width="1311" height="480" src="https://www.youtube.com/embed/Qoxg3pmM4DI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

    </div>
  </div>

</section>`;

var turma2 = `<section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">

<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>Turma II <i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class=" text-center video-aula">
<h1>Aulas online</h1>
<h3>Senhores pais e/ou responsáveis, acesso as aulas remotas mediada por tecnologia.</h3>
<a class=" btn btn-secondary px-4 py-3 mt-3"  href="https://meet.jit.si/colegiogetsemaniinfantilII"> Clique para acessar a aula </a>
</div>
<div class="container">
  <div class="text-center">
  
      <h1 class="mb-4">Vídeo Aula semanal </h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
 </div>
</div>
</section>

<section>
<div class="video1">
     <div class="container">
          <h3 class="titulob"> Vídeo educativo </h3>
        <div class="video-container">

          <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

         </div>
    </div>
</div>

<div class="video">
    <div class="container">
         <h3 class="titulo">Vídeo aula 01</h3>
         <div class="video-container">
                     <iframe width="1311" height="480" src="https://www.youtube.com/embed/Djl6rMmzl7M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
         </div>
    </div>
</div>


<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 02</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/fUNoZc_FY1k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>


<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 03</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/FY7fDIGMEas" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>


<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 04</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/m6xCuqMvb7A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>


<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 05</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/3E145UlE1fE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>


<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 06</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/dxuI0RVNA4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 07 (Formas Geométricas 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/AJXH-EPipzY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 08 (Formas Geométricas 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/RTpzYDB7WGc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 09 (Vogais)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ry53Tx5SWd0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 10 (Cores)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/_lCFJFzkDPE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 11</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/TQ7Epb0sheM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 12 (Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/o3pxCTaG8gE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 13 (Vogais)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/BqcQ4-sugEQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 14 (Datas Comemorativas)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/MAN7_IuUhzM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 15 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/o-yYqwuHDCQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 16</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/YoWEaJ-N5EM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 17 (Alimentação Saudável)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/UxGUsbzciP0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 18</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/wD_Pe-fZK4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 19</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/tPtFLIGkyjY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 20 (Inglês)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Vul7XAJH3rM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 21</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/AzQundWu4k4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 22</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/4-czDZU_cSA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 23</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/hN7rzZY_9k0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 24</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/yDqzExkPHw4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 25</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/NT1x-3uu06Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 26</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/3ATdKBLNOPg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 27</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/gEoMF562G0E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 28</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/tIJGzFpnl4s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 29</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/U7tbjNq8lDU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 30</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/hHyMF9_XWEk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 31</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/csJ08kCNxiY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 32</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/XvfYJrNF2Sk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 33</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ErcMDvBAwCU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 34 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/8M1PPgE-HU4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 35</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/3CRQFW4zeAU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 36</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/mPCZi32mjKw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 37</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/bqdjM5eyQV0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 38</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/-He_OXs5Bc0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 39</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/tdQqehM_w8E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 40</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/fDveyvd51jo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 41</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/msju3PTmmKs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 42</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/dXNh5cDMtGI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 43</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/07N4RrDgIaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 44</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/VH-evexL0fc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 45</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/l1_KnOCUNGE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 46</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/qc37rueBd3k" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 47</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/duhyUVnTgkU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 48</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/r-s886UJLlQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 49</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/G7heuhSN6Xg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 50</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/DWQpT_zf0Ko" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 51</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/wpwPfwWlNvQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 52</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/EQYnz-XQTV0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 53</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/h7omlARyOaQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 54</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/I4oXP620Its" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 55</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/hpzAFtmLZUE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 56</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/38ozy7ItGik" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 57</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/3Gf90NZAIzw" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 58</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/dLOuEl46j2M" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 59</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/HoKuXo7tY1A" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 60</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/AwvPK2sFzQo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 61 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/vaMNHbrT7z4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 62 </h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/AR2X68xQu1E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 63</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/TtMZ_iogPh0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 64 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/CWwNnwsWnTs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 65</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/SqsC1yK48yU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 66</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/5ECnDx0Vt_c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 67</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/WaGXQZ7-T_8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 68</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/b9pKyPFlhRE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 69</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/XU32mW_2GeM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 70</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/xjOoe261J6w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 71</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/85E5iYajD6Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 72</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/Ofom6YumVk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 73</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/DN4-rh6Nb5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 74</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/yFa9MojF_UI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 75</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/ILAzyZLjDDg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 76</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/sOwRIhEhZdk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 77</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/kX74i_-jJ-U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 78</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/QBuVSzMpWVs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 79</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/suBFfKDCx2k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 80</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/lWTydV4g5vU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 81</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/Z9-IsNqnN10" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 82</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/m7KdpXBN5S0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 83</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/-ZEf1NYlw8M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 84</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/JZG3VciLhxs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 85</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/xdQR70VV4nU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 86</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/DY_IioH0EZA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 87</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/q4RP2Vrc5NU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 23 <br> 31/agosto até 06/setembro</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana23/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana23/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana23/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana23/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana23/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana23/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana23/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana23/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana23/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana23/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana23/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana23/img6.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana23/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana23/img7.jpg" alt=""></a>
      </div>
     </div>
  </div>
  </div>
  </section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 22 <br> 24/agosto até 30/agosto</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana22/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana22/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana22/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana22/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana22/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana22/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana22/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana22/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana22/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana22/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana22/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana22/img6.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana22/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana22/img7.jpg" alt=""></a>
      </div>
     </div>
  </div>
  </div>
  </section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 21 <br> 17/agosto até 23/agosto</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana21/img1.png" download> <img class="img-fluid"
            src="./images/infantil2/semana21/img1.png" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana21/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana21/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana21/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana21/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana21/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana21/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana21/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana21/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana21/img6.png" download> <img class="img-fluid"
            src="./images/infantil2/semana21/img6.png" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana21/img7.png" download> <img class="img-fluid"
            src="./images/infantil2/semana21/img7.png" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil2/semana21/img8.png" download> <img class="img-fluid"
          src="./images/infantil2/semana21/img8.png" alt=""></a>
    </div>
   </div>
     </div>
  </div>
  </div>
  </section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 20 <br> 10/agosto até 16/agosto</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana20/img1.jpeg" download> <img class="img-fluid"
            src="./images/infantil2/semana20/img1.jpeg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana20/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana20/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana20/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana20/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana20/img4.png" download> <img class="img-fluid"
            src="./images/infantil2/semana20/img4.png" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana20/img5.jpeg" download> <img class="img-fluid"
            src="./images/infantil2/semana20/img5.jpeg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana20/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana20/img6.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana20/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana20/img7.jpg" alt=""></a>
      </div>
     </div>
  </div>
  </div>
  </section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 19 <br> 03/agosto até 09/agosto</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana19/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana19/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana19/img2.png" download> <img class="img-fluid"
            src="./images/infantil2/semana19/img2.png" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana19/img3.jpeg" download> <img class="img-fluid"
            src="./images/infantil2/semana19/img3.jpeg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana19/img4.png" download> <img class="img-fluid"
            src="./images/infantil2/semana19/img4.png" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana19/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana19/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana19/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana19/img6.jpg" alt=""></a>
      </div>
      </div>
     </div>
  </div>
  </div>
  </section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 18 <br> 27/julho até 02/agosto</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana18/img1.png" download> <img class="img-fluid"
            src="./images/infantil2/semana18/img1.png" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana18/img2.png" download> <img class="img-fluid"
            src="./images/infantil2/semana18/img2.png" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana18/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana18/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana18/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana18/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana18/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana18/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana18/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana18/img6.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana18/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana18/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana18/img8.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana18/img8.jpg" alt=""></a>
      </div>
      </div>
  </div>
  </div>
  </section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center prova">
     
        <h1 class="mb-4">Tarefa semanal 17 <br> 20/julho até 26/julho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <h1 class="color">(Recesso escolar)</h1>
     </div>
  </div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 16 <br> 13/julho até 19/julho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana16/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana16/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana16/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana16/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana16/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana16/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana16/img4.png" download> <img class="img-fluid"
            src="./images/infantil2/semana16/img4.png" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana16/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana16/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana16/img6.png" download> <img class="img-fluid"
            src="./images/infantil2/semana16/img6.png" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana16/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana16/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana16/img8.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana16/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana16/img9.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana16/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana16/img10.png" download> <img class="img-fluid"
            src="./images/infantil2/semana16/img10.png" alt=""></a>
      </div>
      </div>
  </div>
  </div>
  </section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 15 <br> 06/julho até 12/julho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana15/img1.png" download> <img class="img-fluid"
            src="./images/infantil2/semana15/img1.png" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana15/img2.jpeg" download> <img class="img-fluid"
            src="./images/infantil2/semana15/img2.jpeg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana15/img3.png" download> <img class="img-fluid"
            src="./images/infantil2/semana15/img3.png" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana15/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana15/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana15/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana15/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana15/img6.jpeg" download> <img class="img-fluid"
            src="./images/infantil2/semana15/img6.jpeg" alt=""></a>
      </div>
      </div>
  </div>
  </div>
  </section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 14 <br> 29/junho até 05/julho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana14/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana14/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana14/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana14/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana14/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana14/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana14/img4.jpeg" download> <img class="img-fluid"
            src="./images/infantil2/semana14/img4.jpeg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana14/img5.jpeg" download> <img class="img-fluid"
            src="./images/infantil2/semana14/img5.jpeg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana14/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana14/img6.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana14/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana14/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana14/img8.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana14/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana14/img9.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana14/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana14/img10.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana14/img10.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana14/img11.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana14/img11.jpg" alt=""></a>
      </div>
      </div>
  </div>
  </div>
  </section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 13 <br> 22/junho até 28/junho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana13/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana13/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana13/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana13/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana13/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana13/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana13/img4.jpeg" download> <img class="img-fluid"
            src="./images/infantil2/semana13/img4.jpeg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana13/img5.jpeg" download> <img class="img-fluid"
            src="./images/infantil2/semana13/img5.jpeg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana13/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana13/img6.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana13/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana13/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana13/img8.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana13/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana13/img9.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana13/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana13/img10.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana13/img10.jpg" alt=""></a>
      </div>
      </div>
  </div>
  </div>
  </section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
<div class="container">
      <div class="text-center">
      
      <h1 class="color">(Provinha Infantil)<h1>
        <h2 class="mb-4">Tarefa semanal 12 - 15/junho até 22/junho</h2>
        <h3 class=mb-4>Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos) </h3>
        <p>Clique na imagem para baixar a prova</p>
      
      </div>
   

      <div class="text-center tarefas-img1">
      <div class="row">
          <div class="col-sm">
              <a href="./images/infantil2/semana12/infantil2.pdf" download="download">
              <img class="img-fluid" src="./images/provinha.jpg" alt=""></a>
          </div>
       </div>
     </div>
          
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 11 (Semana de Revisão) <br>- 08/junho até 15/junho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana11/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana11/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana11/img2.jpeg" download> <img class="img-fluid"
            src="./images/infantil2/semana11/img2.jpeg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana11/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana11/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana11/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana11/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana11/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana11/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana11/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana11/img6.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana11/img7.jpeg" download> <img class="img-fluid"
            src="./images/infantil2/semana11/img7.jpeg" alt=""></a>
      </div>
      </div>
  </div>
  </div>
  </section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 10 - 01/junho até 05/junho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana10/img1.jpeg" download> <img class="img-fluid"
            src="./images/infantil2/semana10/img1.jpeg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana10/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana10/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana10/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana10/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana10/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana10/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana10/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana10/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana10/img6.jpeg" download> <img class="img-fluid"
            src="./images/infantil2/semana10/img6.jpeg" alt=""></a>
      </div>
      </div>
  </div>
  </div>
  </section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 09 - 25/maio até 29/maio</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana9/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana9/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana9/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana9/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana9/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana9/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana9/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana9/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana9/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana9/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana9/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana9/img6.jpg" alt=""></a>
      </div>
      </div>
  </div>
  </div>
  </section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
      
        <h1 class="mb-4">Tarefa semanal 08 - 18/maio até 22/maio</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <h4 class=mb-4>Vamos lá mamãe e papai essa semana vamos ajudar às nossas crianças com as formas geométricas.Após assistir o vídeo ajude-os a colorir e colar cada imagem.Quero que use MAIS uma vez a criatividade ok.</h4>
        <p>Clique nas imagens para baixar a tarefa</p>

     
    </div>
  </div>
</section>

<section>
<div class="container ">

<h6>Qual o objetivos de trabalhar as formas geométricas com as nossas crianças? Nomear e distinguir as formas geométricas (quadrado, retangulo, círculo e triangulo). Estimular a desinibição e o entrosamento entre as crianças.. Desenvolver o raciocínio lógico, a psicomotricidade, a coordenação motora e a criatividade.</h6>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/zGRNzEFGrjI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana8/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana8/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana8/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana8/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana8/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana8/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana8/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana8/img4.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil2/semana8/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil2/semana8/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil2/semana8/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil2/semana8/img6.jpg" alt=""></a>
  </div>
  </div>
  </div>
  </div>
  </section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 07 - 13/maio até 15/maio</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>

    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana7/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana7/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana7/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana7/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana7/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana7/img3.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
  </section>

  <section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
    
        <h1 class="mb-4">Tarefa semanal 06 - 02/maio até 12/maio</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <h1 class="mb-4 color"> (Trabalho dirigido) </h1>
     </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana5/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana5/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana5/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana5/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana5/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana5/img3.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
  </section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
    
        <h1 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>

     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana4/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana4/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana4/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana4/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana4/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana4/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil2/semana4/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil2/semana4/img4.jpg" alt=""></a>
     </div>
    </div>
  </div>
  </div>
  </section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h2 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h2>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>

     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana3/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana3/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana3/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana3/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana3/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana3/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil2/semana3/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil2/semana3/img4.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana3/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana3/img5.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
  </section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>

     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana2/img1.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana2/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil2/semana2/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana2/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil2/semana2/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil2/semana2/img3.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
  </section>


  <section class="ftco-section ftco-no-pt ftc-no-pb">
    <div class="container">
      <div class="text-center">
        
        
          <h2 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h2>
          <h3 class=mb-4> Educação Infantil</h3>
          <h3 class=mb-4> Turma Infantil II (2 anos)</h3>
          <p>Clique nas imagens para baixar a tarefa</p>

      
      </div>
    </div>
  </section>

  <section>
  <div class="tarefas-img">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <a href="./images/infantil2/semana1/img1.jpg" download> <img class="img-fluid"
              src="./images/infantil2/semana1/img1.jpg" alt=""></a>
        </div>
        <div class="col-sm">
          <a href="./images/infantil2/semana1/img2.jpg" download> <img class="img-fluid"
              src="./images/infantil2/semana1/img2.jpg" alt=""></a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <a href="./images/infantil2/semana1/img3.jpg" download> <img class="img-fluid"
              src="./images/infantil2/semana1/img3.jpg" alt=""></a>
        </div>
        <div class="col-sm">
          <a href="./images/infantil2/semana1/img4.jpg" download> <img class="img-fluid"
              src="./images/infantil2/semana1/img4.jpg" alt=""></a>
        </div>
      </div>
    </div>
   </div>
 </section>

    <div class="container ">
      <h2 class="mb-4">Vídeos da Tarefa semanal (4 vídeos) </h2>
      <div class="video-container">

        <iframe width="853" height="480" src="https://www.youtube.com/embed/kdQ96ZV3PS4" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>

      <div class="video-container">

        <iframe width="853" height="480" src="https://www.youtube.com/embed/ZBX1oXkUExY" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
      <div class="video-container">

        <iframe width="853" height="480" src="https://www.youtube.com/embed/e-4OJ88DGrc" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>

      <div class="video-container">

        <iframe width="853" height="480" src="https://www.youtube.com/embed/ZDhTzXuGUNw" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
    </div>
  </section>
`;

var turma3 = `<section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">

<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>Turma III <i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class=" text-center video-aula">
<h1>Aulas online</h1>
<h3>Senhores pais e/ou responsáveis,acesso as aulas remotas mediada por tecnologia.</h3>
<a class=" btn btn-secondary px-4 py-3 mt-3"  href="https://meet.jit.si/colegiogetsemaniinfantilII"> Clique para acessar a aula </a>
</div>
<div class="container">
  <div class="text-center">
    
    
      <h1 class="mb-4">Vídeo Aula semanal </h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>

  </div>
</div>
</section>

<section>
<div class="video1">
     <div class="container">
          <h3 class="titulob"> Vídeo educativo </h3>
        <div class="video-container">

          <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

         </div>
    </div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 01</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/Djl6rMmzl7M" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 02</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/fUNoZc_FY1k" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 03</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/FY7fDIGMEas" frameborder="0"
   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 04</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/m6xCuqMvb7A" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 05</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/3E145UlE1fE" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 06</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/dxuI0RVNA4Q" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 07(Formas Geométricas 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/AJXH-EPipzY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 08(Formas Geométricas 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/RTpzYDB7WGc" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 09(vogais)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ry53Tx5SWd0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 10(Cores)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/_lCFJFzkDPE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 11</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/TQ7Epb0sheM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 12(Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/o3pxCTaG8gE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 13(Vogais)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/BqcQ4-sugEQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 14(Datas comemorativas)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/MAN7_IuUhzM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 15(matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/o-yYqwuHDCQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 16</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/YoWEaJ-N5EM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 17 (Alimentação saudável)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/UxGUsbzciP0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 18</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/wD_Pe-fZK4Q" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 19</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/tPtFLIGkyjY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 20(Inglês)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Vul7XAJH3rM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 21</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/AzQundWu4k4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 22</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/4-czDZU_cSA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 23</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/hN7rzZY_9k0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 24</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/yDqzExkPHw4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 25</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/NT1x-3uu06Y" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 26</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/3ATdKBLNOPg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 27</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/gEoMF562G0E" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 28</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/tIJGzFpnl4s" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 29</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/U7tbjNq8lDU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 30</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/hHyMF9_XWEk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 31</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/csJ08kCNxiY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 32</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/XvfYJrNF2Sk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 33</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ErcMDvBAwCU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 34 (Inglês 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/zxIpA5nF_LY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 35 (Inglês 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/SOYKj37k4eY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 36</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/3CRQFW4zeAU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 37</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/mPCZi32mjKw" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 38</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/bqdjM5eyQV0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 39</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/-He_OXs5Bc0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 40</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/tdQqehM_w8E" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 41</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/fDveyvd51jo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 42</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/msju3PTmmKs" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 43</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/dXNh5cDMtGI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 44</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/07N4RrDgIaM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 45</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/VH-evexL0fc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 46</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/l1_KnOCUNGE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 47</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/qc37rueBd3k" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 48</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/duhyUVnTgkU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 49</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/r-s886UJLlQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 50</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/G7heuhSN6Xg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 51</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/DWQpT_zf0Ko" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 52</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/wpwPfwWlNvQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 53</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/EQYnz-XQTV0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 54</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/h7omlARyOaQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 55</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/I4oXP620Its" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 56</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/hpzAFtmLZUE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 57</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/38ozy7ItGik" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 58</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/3Gf90NZAIzw" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 59</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/dLOuEl46j2M" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 60</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/HoKuXo7tY1A" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 61</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/AwvPK2sFzQo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 62 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/2thOagG_Z1g" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 63 </h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/AR2X68xQu1E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 64</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/TtMZ_iogPh0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 65 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/CJDSNwvGy3o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 66</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/SqsC1yK48yU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 67</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/WaGXQZ7-T_8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 68</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/b9pKyPFlhRE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 69</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/XU32mW_2GeM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 70</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/xjOoe261J6w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 71</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/85E5iYajD6Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 72</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/Ofom6YumVk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 73</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/DN4-rh6Nb5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 74</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/yFa9MojF_UI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 75</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/ILAzyZLjDDg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 76</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/sOwRIhEhZdk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 77</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/kX74i_-jJ-U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 78</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/QBuVSzMpWVs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 79</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/suBFfKDCx2k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 80</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/lWTydV4g5vU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 81</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/Z9-IsNqnN10" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob">Vídeo aula 82</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/m7KdpXBN5S0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 83</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/-ZEf1NYlw8M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob">Vídeo aula 84</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/JZG3VciLhxs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 85</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/xdQR70VV4nU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob">Vídeo aula 86</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/DY_IioH0EZA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 87</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/q4RP2Vrc5NU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob">Vídeo aula 88</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/6A-81wmE0zk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo">Vídeo aula 89</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/HthtOs9rC5M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 23<br> 31/agosto até 06/setembro</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana23/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana23/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana23/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana23/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana23/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana23/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana23/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana23/img4.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana23/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana23/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana23/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana23/img6.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana23/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana23/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana23/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana23/img8.jpg" alt=""></a>
    </div>
    </div>
    </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 22<br> 24/agosto até 30/agosto</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana22/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana22/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana22/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana22/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana22/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana22/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana22/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana22/img4.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana22/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana22/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana22/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana22/img6.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana22/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana22/img7.jpg" alt=""></a>
    </div>
    </div>
</div>
</div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 21<br> 17/agosto até 23/agosto</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana21/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana21/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana21/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana21/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana21/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana21/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana21/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana21/img4.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana21/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana21/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana21/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana21/img6.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana21/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana21/img7.jpg" alt=""></a>
    </div>
    </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 20<br> 10/agosto até 16/agosto</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana20/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana20/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana20/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana20/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana20/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana20/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana20/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana20/img4.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana20/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana20/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana20/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana20/img6.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana20/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana20/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana20/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana20/img8.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana20/img9.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana20/img9.jpg" alt=""></a>
    </div>
    </div>
    </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 19<br> 03/agosto até 09/agosto</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana19/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana19/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana19/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana19/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana19/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana19/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana19/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana19/img4.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana19/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana19/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana19/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana19/img6.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana19/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana19/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana19/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana19/img8.jpg" alt=""></a>
    </div>
</div>
</div>
</div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 18<br> 27/julho até 02/agosto</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana18/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana18/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana18/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana18/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana18/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana18/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana18/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana18/img4.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana18/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana18/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana18/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana18/img6.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana18/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana18/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana18/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana18/img8.jpg" alt=""></a>
    </div>
</div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center prova">
      <h1 class="mb-4">Tarefa semanal 17<br> 20/julho até 26/julho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <h1 class="color">(Recesso escolar)</h1>
    </div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 16<br> 13/julho até 19/julho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana16/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana16/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana16/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana16/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana16/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana16/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana16/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana16/img4.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana16/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana16/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana16/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana16/img6.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana16/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana16/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana16/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana16/img8.jpg" alt=""></a>
    </div>
</div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 15<br> 06/julho até 12/julho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana15/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana15/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana15/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana15/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana15/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana15/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana15/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana15/img4.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana15/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana15/img5.jpg" alt=""></a>
    </div>
</div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 14<br> 29/junho até 05/julho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana14/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana14/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana14/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana14/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana14/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana14/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana14/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana14/img4.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana14/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana14/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana14/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana14/img6.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana14/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana14/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana14/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana14/img8.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana14/img9.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana14/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana14/img10.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana14/img10.jpg" alt=""></a>
    </div>
    </div>
</div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 13<br> 22/junho até 28/junho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana13/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana13/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana13/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana13/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana13/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana13/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana13/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana13/img4.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana13/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana13/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana13/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana13/img6.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana13/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana13/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana13/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana13/img8.jpg" alt=""></a>
    </div>
    </div>
</div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
<div class="container">
      <div class="text-center">
      
      <h1 class="color">(Provinha Infantil)<h1>
        <h2 class="mb-4">Tarefa semanal 12 - 15/junho até 22/junho</h2>
        <h3 class=mb-4>Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil III (3 anos) </h3>
        <p>Clique na imagem para baixar a prova</p>
      
      </div>
   

      <div class="text-center tarefas-img1">
      <div class="row">
          <div class="col-sm">
              <a href="./images/infantil3/semana12/infantil3.pdf" download="download">
              <img class="img-fluid" src="./images/provinha.jpg" alt=""></a>
          </div>
       </div>
     </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 11 (Semana de Revisão)<br> - 08/junho até 15/junho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana11/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana11/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana11/img2.png" download> <img class="img-fluid"
          src="./images/infantil3/semana11/img2.png" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana11/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana11/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana11/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana11/img4.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana11/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana11/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana11/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana11/img6.jpg" alt=""></a>
    </div>
</div>
<div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana11/img7.jpeg" download> <img class="img-fluid"
          src="./images/infantil3/semana11/img7.jpeg" alt=""></a>
    </div>
</div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 10 - 01/junho até 05/junho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana10/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana10/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana10/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana10/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana10/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana10/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana10/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana10/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana10/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana10/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana10/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana10/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil3/semana10/img7.jpg" download> <img class="img-fluid"
        src="./images/infantil3/semana10/img7.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil3/semana10/img8.jpg" download> <img class="img-fluid"
        src="./images/infantil3/semana10/img8.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil3/semana10/img9.jpg" download> <img class="img-fluid"
        src="./images/infantil3/semana10/img9.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil3/semana10/img10.jpg" download> <img class="img-fluid"
        src="./images/infantil3/semana10/img10.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil3/semana10/img11.jpg" download> <img class="img-fluid"
        src="./images/infantil3/semana10/img11.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil3/semana10/img12.jpg" download> <img class="img-fluid"
        src="./images/infantil3/semana10/img12.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil3/semana10/img13.png" download> <img class="img-fluid"
        src="./images/infantil3/semana10/img13.png" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil3/semana10/img14.jpg" download> <img class="img-fluid"
        src="./images/infantil3/semana10/img14.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil3/semana10/img15.jpeg" download> <img class="img-fluid"
        src="./images/infantil3/semana10/img15.jpeg" alt=""></a>
  </div>
</div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 09 - 25/maio até 29/maio</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana9/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana9/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana9/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana9/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana9/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana9/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana9/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana9/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana9/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana9/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana9/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana9/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil3/semana9/img7.jpg" download> <img class="img-fluid"
        src="./images/infantil3/semana9/img7.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil3/semana9/img8.jpg" download> <img class="img-fluid"
        src="./images/infantil3/semana9/img8.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil3/semana9/img9.jpg" download> <img class="img-fluid"
        src="./images/infantil3/semana9/img9.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil3/semana9/img10.jpg" download> <img class="img-fluid"
        src="./images/infantil3/semana9/img10.jpg" alt=""></a>
  </div>
</div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
   
      <h1 class="mb-4">Tarefa semanal 08 - 18/maio até 22/maio</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana8/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana8/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana8/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana8/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana8/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana8/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana8/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana8/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana8/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana8/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana8/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana8/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil3/semana8/img7.jpg" download> <img class="img-fluid"
        src="./images/infantil3/semana8/img7.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil3/semana8/img8.jpg" download> <img class="img-fluid"
        src="./images/infantil3/semana8/img8.jpg" alt=""></a>
  </div>
</div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
   
      <h1 class="mb-4">Tarefa semanal 07 - 13/maio até 15/maio</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>

  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana7/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana7/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana7/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana7/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana7/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana7/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana7/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana7/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana7/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana7/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana7/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana7/img6.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
  
   
      <h1 class="mb-4">Tarefa semanal 06 - 02/maio até 12/maio</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <h1 class="mb-4 color"> (Trabalho dirigido) </h1>
      
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
  
      <h1 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>

  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana5/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana5/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana5/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana5/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana5/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana5/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana5/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana5/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana5/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana5/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana5/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana5/img6.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana4/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana4/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana4/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana4/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana4/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana4/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana4/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana4/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana4/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana4/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana4/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana4/img6.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana4/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana4/img7.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
   
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana3/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img6.jpg" alt=""></a>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana3/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana3/img8.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana2/img1.jpg" download><img class="img-fluid"
          src="./images/infantil3/semana2/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana2/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana2/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana2/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana2/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana2/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana2/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana2/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana2/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana2/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana2/img6.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil III (3 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
  
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img1.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img1.jpg" alt="">
      </a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img2.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img3.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img4.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img5.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img6.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil3/semana1/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil3/semana1/img8.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>
`;

var turma4 = `  <section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">

<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>Turma IV <i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class=" text-center video-aula">
<h1>Aulas online</h1>
<h3>Senhores pais e/ou responsáveis, acesso as aulas remotas mediada por tecnologia.</h3>
<a class=" btn btn-secondary px-4 py-3 mt-3"  href="https://meet.jit.si/colegiogetsemaniinfantilIV"> Clique para acessar a aula </a>
</div>
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Vídeo Aula semanal </h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>

  </div>
</div>
</section>

<section>
<div class="video1">
     <div class="container">
          <h3 class="titulob"> Vídeo educativo </h3>
        <div class="video-container">

          <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

         </div>
    </div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 01</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/aceTS2Z4F-M" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 02(Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/7kjXTeRdVmA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 03(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/Fms1FdvvF2g" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 04(Datas comemorativas)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/_taECuBe2oI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 05(Linguagem 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ed4W-USjh6o" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 06(Linguagem 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/MyScaaf2RIo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 07(Linguagem 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/v_CUJhYxYVk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 08(Matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/1Jzr4CSCD8A" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 09(Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/KL7tKmjs6Is" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 10(Matemática 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ufZgdjU0wfg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 11(Linguagem 04)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/YIyjOv6xNDM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 12(Linguagem 01)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/wKKwF1W3P48" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 13(Linguagem 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/1g8YEjuSFJI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 14(Linguagem 03)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/H2cmtl3DKZQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 15(Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/8fL_nszEnsE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 16(Natureza e Sociedade)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/_RSetW3zB2I" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 17(Artes)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/8C-h6bhLXJE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 18(Recreação)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/PW2uJX9Vt9Y" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 19(matemática 01)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/33RAgkjRjuQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 20(matemática 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/jdytXi1OWIM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 21(matemática 03)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/RVuqttcNdSk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 22(Datas comemorativas)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/l27w44WpUw4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 23 </h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/FzOfTyihcNc" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 24</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/VAevax5khqA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 25 (matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/10AFlWFxfFA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 26(matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/TumQ4IzUJug" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 27 (linguagem F)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/9DUHpE7fdgQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 28(linguagem G)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/5XnGNXs0R14" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 29(Alimentação saudável)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/UxGUsbzciP0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 30(Inglês)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/P7cJqpKg-U0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 31(Linguagem 1)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/z8Dwghtlmm0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 32(Linguagem 2)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/J7IHOLnKNv4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 33 (Inglês 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/zxIpA5nF_LY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 34 (Inglês 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/SOYKj37k4eY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 35(Linguagem)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/J7TmSLwbRfM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 36(Linguagem)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/vHfv2bkL3M0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 37(Linguagem)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/YkmuI-wytEo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 38(linguagem)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/bYzHyc1o0Lg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 39 (linguagem K)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xbSuEay2c8Q" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 40 (linguagem J)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/4nHrLDkH6QI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 41 (linguagem)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/5hSIC4zflGw" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 42 (linguagem C)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/yDMYTkMIunA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 43 (linguagem)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/WNbTsIM1SNo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 44 (Matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/TanlOCJpiHk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 45 (Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/3pqgwrB0QmI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 46 (Matemática 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/t9T_IgPKtbM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 47 (Linguagem)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/_pIWd0JtokA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 48 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/jkV1iLMrRv4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>


<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 49 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/m3ttKz627dY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 50 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/CNizqyf-mqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 51 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/8g0e4KFbcbI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>



<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 52 (Linguagem método sensorial 01)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/-GTH3efO1lY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 53 (Linguagem método sensorial 02)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/Yb21yVI-dfw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 53 (Linguagem método sensorial 03)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/-9xZ7h16Ifc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 54 (Linguagem método sensorial 04)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/ljpmN__r_YA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 55 (Linguagem método sensorial 05)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/AOnlFSSCdIU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 56 (Linguagem método visual 01)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/MrPnurO9fEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 57 (Linguagem método visual 02)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/9IW4sSwcdbw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 58 (Inglês 01)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/yx-Tu3uOo1A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 59 (Inglês 02)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/r5hgH6jE48g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 23<br>  31/agosto até 06/setembro</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana23/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana23/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana23/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana23/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana23/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana23/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana23/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana23/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana23/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana23/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana23/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana23/img6.jpg" alt=""></a>
      </div>
    </div>
  </div>
</div>
</div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 22<br>  24/agosto até 30/agosto</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana22/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana22/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana22/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana22/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana22/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana22/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana22/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana22/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana22/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana22/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana22/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana22/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil4/semana22/img7.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana22/img7.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 21<br>  17/agosto até 23/agosto</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana21/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana21/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana21/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana21/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana21/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana21/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana21/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana21/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana21/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana21/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana21/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana21/img6.jpg" alt=""></a>
      </div>
    </div>
  </div>
</div>
</div>
</section>





<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 20<br>  10/agosto até 16/agosto</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana20/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana20/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana20/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana20/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana20/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana20/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana20/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana20/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana20/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana20/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana20/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana20/img6.jpg" alt=""></a>
      </div>
    </div>
  </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 19<br>  03/agosto até 09/agosto</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana19/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana19/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana19/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana19/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana19/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana19/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana19/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana19/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana19/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana19/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana19/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana19/img6.jpg" alt=""></a>
      </div>
    </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana19/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana19/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil4/semana19/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana19/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil4/semana19/img9.jpg" download> <img class="img-fluid"
        src="./images/infantil4/semana19/img9.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil4/semana19/img10.jpg" download> <img class="img-fluid"
        src="./images/infantil4/semana19/img10.jpg" alt=""></a>
  </div>
  </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 18<br>  27/julho até 02/agosto</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana18/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana18/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana18/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana18/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana18/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana18/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana18/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana18/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana18/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana18/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana18/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana18/img6.jpg" alt=""></a>
      </div>
    </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana18/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana18/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil4/semana18/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana18/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil4/semana18/img9.jpg" download> <img class="img-fluid"
        src="./images/infantil4/semana18/img9.jpg" alt=""></a>
  </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center prova">
      
        <h1 class="mb-4">Tarefa semanal 17<br>  20/julho até 26/julho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <h1 class="color">(Recesso escolar)</h1>
      
    </div>
  </div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 16<br>  13/julho até 19/julho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana16/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana16/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana16/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana16/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana16/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana16/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana16/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana16/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana16/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana16/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana16/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana16/img6.jpg" alt=""></a>
      </div>
    </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana16/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana16/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil4/semana16/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana16/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil4/semana16/img9.jpg" download> <img class="img-fluid"
        src="./images/infantil4/semana16/img9.jpg" alt=""></a>
  </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 15<br>  06/julho até 12/julho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana15/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana15/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana15/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana15/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana15/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana15/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana15/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana15/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana15/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana15/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana15/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana15/img6.jpg" alt=""></a>
      </div>
    </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana15/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana15/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil4/semana15/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana15/img8.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 14<br>  29/junho até 05/julho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana14/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana14/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana14/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana14/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana14/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana14/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana14/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana14/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana14/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana14/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana14/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana14/img6.jpg" alt=""></a>
      </div>
    </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana14/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana14/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil4/semana14/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana14/img8.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil4/semana14/img9.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana14/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil4/semana14/img10.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana14/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil4/semana14/img11.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana14/img11.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 13<br>  22/junho até 28/junho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana13/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana13/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana13/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana13/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana13/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana13/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana13/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana13/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana13/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana13/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana13/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana13/img6.jpg" alt=""></a>
      </div>
    </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana13/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana13/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil4/semana13/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana13/img8.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil4/semana13/img9.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana13/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil4/semana13/img10.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana13/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil4/semana13/img11.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana13/img11.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
<div class="container">
      <div class="text-center">
      
      <h1 class="color">(Provinha Infantil)<h1>
        <h2 class="mb-4">Tarefa semanal 12 - 15/junho até 22/junho</h2>
        <h3 class=mb-4>Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos) </h3>
        <p>Clique na imagem para baixar a prova</p>
      
      </div>
   

      <div class="text-center tarefas-img1">
      <div class="row">
          <div class="col-sm">
              <a href="./images/infantil4/semana12/infantil4.pdf" download="download">
              <img class="img-fluid" src="./images/provinha.jpg" alt=""></a>
          </div>
       </div>
     </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 11 (Semana de Revisão)<br> - 08/junho até 15/junho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana11/img1.png" download><img class="img-fluid"
            src="./images/infantil4/semana11/img1.png" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana11/img2.png" download> <img class="img-fluid"
            src="./images/infantil4/semana11/img2.png" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana11/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana11/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana11/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana11/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana11/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana11/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana11/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana11/img6.jpg" alt=""></a>
      </div>
    </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana11/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana11/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil4/semana11/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana11/img8.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil4/semana11/img9.png" download> <img class="img-fluid"
          src="./images/infantil4/semana11/img9.png" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 10 - 01/junho até 05/junho</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana10/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana10/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana10/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana10/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana10/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana10/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana10/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana10/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana10/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana10/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana10/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana10/img6.jpg" alt=""></a>
      </div>
    </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana10/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana10/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil4/semana10/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana10/img8.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil4/semana10/img9.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana10/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
    <a href="./images/infantil4/semana10/img10.jpg" download> <img class="img-fluid"
        src="./images/infantil4/semana10/img10.jpg" alt=""></a>
  </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil4/semana10/img11.jpg" download> <img class="img-fluid"
        src="./images/infantil4/semana10/img11.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil4/semana10/img12.jpg" download> <img class="img-fluid"
        src="./images/infantil4/semana10/img12.jpg" alt=""></a>
  </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil4/semana10/img13.jpg" download> <img class="img-fluid"
        src="./images/infantil4/semana10/img13.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil4/semana10/img14.png" download> <img class="img-fluid"
        src="./images/infantil4/semana10/img14.png" alt=""></a>
  </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil4/semana10/img15.jpg" download> <img class="img-fluid"
        src="./images/infantil4/semana10/img15.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil4/semana10/img16.jpeg" download> <img class="img-fluid"
        src="./images/infantil4/semana10/img16.jpeg" alt=""></a>
  </div>
  </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
    
        <h1 class="mb-4">Tarefa semanal 09 - 25/maio até 29/maio</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana9/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana9/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana9/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana9/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana9/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana9/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana9/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana9/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana9/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana9/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana9/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana9/img6.jpg" alt=""></a>
      </div>
    </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana9/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana9/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil4/semana9/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana9/img8.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil4/semana9/img9.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana9/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
    <a href="./images/infantil4/semana9/img10.jpg" download> <img class="img-fluid"
        src="./images/infantil4/semana9/img10.jpg" alt=""></a>
  </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil4/semana9/img11.jpg" download> <img class="img-fluid"
        src="./images/infantil4/semana9/img11.jpg" alt=""></a>
  </div>
  </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 08 - 18/maio até 22/maio</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana8/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana8/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana8/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana8/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana8/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana8/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana8/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana8/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana8/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana8/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana8/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana8/img6.jpg" alt=""></a>
      </div>
    </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana8/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana8/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil4/semana8/img8.jpg" download> <img class="img-fluid"
          src="./images/infantil4/semana8/img8.jpg" alt=""></a>
    </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
     
        <h1 class="mb-4">Tarefa semanal 07 - 13/maio até 15/maio</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana7/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana7/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana7/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana7/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana7/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana7/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana7/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana7/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana7/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana7/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana7/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana7/img6.jpg" alt=""></a>
      </div>
    </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana7/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana7/img7.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
  
      <h1 class="mb-4">Tarefa semanal 06 - 02/maio até 12/maio</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
      <h1 class="mb-4 color"> (Trabalho dirigido) </h1>
      
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana5/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img6.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img8.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana5/img9.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana5/img9.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana4/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img6.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana4/img8.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana4/img8.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
     
        <h1 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana3/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img6.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img8.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img8.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img9.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana3/img10.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana3/img10.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>



<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana2/img1.jpg" download><img class="img-fluid"
            src="./images/infantil4/semana2/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana2/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana2/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana2/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana2/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana2/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana2/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana2/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana2/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana2/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana2/img6.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
     
        <h1 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h1>
        <h3 class=mb-4> Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil IV (4 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img1.jpg" download>
          <img class="img-fluid" src="./images/infantil4/semana1/img1.jpg" alt="">
        </a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img2.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img3.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img4.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img5.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img6.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img7.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img8.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil4/semana1/img9.jpg" download> <img class="img-fluid"
            src="./images/infantil4/semana1/img9.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>`;

var turma5 = `  <section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">

<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>Turma V <i class="ion-ios-arrow-forward"></i></span></p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class=" text-center video-aula">
<h1>Aulas online</h1>
<h3>Senhores pais e/ou responsáveis, acesso as aulas remotas mediada por tecnologia.</h3>
<a class=" btn btn-secondary px-4 py-3 mt-3"  href="https://meet.jit.si/colegiogetsemaniinfantilV"> Clique para acessar a aula </a>
</div>
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Vídeo Aula semanal </h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>

  </div>
</div>
</section>

<section>
<div class="video1">
     <div class="container">
          <h3 class="titulob"> Vídeo educativo </h3>
        <div class="video-container">

          <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

         </div>
    </div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 01</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/aceTS2Z4F-M" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 02(Linguagem 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ed4W-USjh6o" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 03(Linguagem 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/MyScaaf2RIo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 04(Linguagem 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/v_CUJhYxYVk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 05(Matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/1Jzr4CSCD8A" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 06(Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/KL7tKmjs6Is" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 07(Matemática 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ufZgdjU0wfg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 08(Linguagem 04)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/YIyjOv6xNDM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 09(Linguagem 05)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/J7TmSLwbRfM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 10(Linguagem 06)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/vHfv2bkL3M0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>


<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 11(matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/33RAgkjRjuQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 12(Linguagem)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/YkmuI-wytEo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 13(matemática 01)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/jdytXi1OWIM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 14(matemática 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/RVuqttcNdSk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 15(linguagem)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/bYzHyc1o0Lg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 16 (matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/10AFlWFxfFA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 17(matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/TumQ4IzUJug" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 18 (linguagem K)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xbSuEay2c8Q" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 19 (linguagem J)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/4nHrLDkH6QI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 20 (Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/WHaD0zLjojk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 21 (Alimentação saudável)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/UxGUsbzciP0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 22 (Inglês)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/P7cJqpKg-U0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 23 (Linguagem )</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/QuHrhTje6b0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 24 (Linguagem L)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/KcsAa_o59uI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 25 (Matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/KbXMQdMJyJs" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 26 (Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/B_xPVTVzSWM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>


<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 27 (Matemática 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/A1SQOL-qFbQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 28 (Matemática 04)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/LgHBU7OFSgQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 29 (Inglês 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/zxIpA5nF_LY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 30 (Inglês 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/JITMUb6OAzw" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>


<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 31 (Inglês 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/SOYKj37k4eY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 32 (Linguagem 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/WbSF1BoA7g4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 33 (Linguagem 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/_MpVddf5rQs" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 34 (Linguagem 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/qMdqzJlGLKY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 35 (Matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/Jrjww9Sj9lg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 36 (Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/IpQqnXpQEbI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 37 (Matemática 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/nEjxqhFAopY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 38 (Linguagem)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/Pk_8qsFcIO8" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 39 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/1ekvZG3veAM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>


<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 40 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/8jdkqxbX58s" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 41 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/TYb0U-O6G_8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 42 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/FeeFABcPGhI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 43 (Linguagem método sensorial 01)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/-GTH3efO1lY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 44 (Linguagem método sensorial 02)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/Yb21yVI-dfw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 45 (Linguagem método sensorial 03)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/-9xZ7h16Ifc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 46 (Linguagem método sensorial 04)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/ljpmN__r_YA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 47 (Linguagem método sensorial 05)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/AOnlFSSCdIU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 48 (Linguagem método visual 01)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/MrPnurO9fEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 49 (Linguagem método visual 02)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/9IW4sSwcdbw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 50 (Inglês 01)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/CEgFZ1PBviA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 51 (Inglês 02)</h3>
<div class="video-container">

<iframe width="786" height="442" src="https://www.youtube.com/embed/_GTW6x6WlCM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 23<br>  31/agosto até 06/setembro</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana23/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana23/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana23/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana23/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana23/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana23/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana23/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana23/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana23/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana23/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana23/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana23/img6.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 22<br>  24/agosto até 30/agosto</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana22/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana22/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana22/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana22/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana22/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana22/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana22/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana22/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana22/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana22/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana22/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana22/img6.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 21<br>  17/agosto até 23/agosto</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana21/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana21/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana21/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana21/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana21/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana21/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana21/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana21/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana21/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana21/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana21/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana21/img6.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 20<br>  10/agosto até 16/agosto</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana20/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana20/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana20/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana20/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana20/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana20/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana20/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana20/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana20/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana20/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana20/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana20/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana20/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana20/img7.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 19<br>  03/agosto até 09/agosto</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana19/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana19/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana19/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana19/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana19/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana19/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana19/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana19/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana19/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana19/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana19/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana19/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana19/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana19/img7.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 18<br>  27/julho até 02/agosto</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana18/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana18/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana18/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana18/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana18/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana18/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana18/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana18/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana18/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana18/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana18/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana18/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana18/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana18/img7.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center prova">
   
      <h1 class="mb-4">Tarefa semanal 17<br>  20/julho até 26/julho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <h1 class="color">(Recesso escolar)</h1>
   
  </div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 16<br>  13/julho até 19/julho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana16/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana16/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana16/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana16/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana16/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana16/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana16/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana16/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana16/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana16/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana16/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana16/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana16/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana16/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana16/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana16/img8.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 15<br>  06/julho até 12/julho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana15/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana15/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana15/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana15/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana15/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana15/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana15/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana15/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana15/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana15/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana15/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana15/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana15/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana15/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana15/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana15/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil5/semana15/img9.jpg" download><img class="img-fluid"
        src="./images/infantil5/semana15/img9.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil5/semana15/img10.jpg" download><img class="img-fluid"
        src="./images/infantil5/semana15/img10.jpg" alt=""></a>
  </div>
</div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 14<br>  29/junho até 05/julho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana14/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana14/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana14/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana14/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana14/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana14/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana14/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana14/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana14/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana14/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana14/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana14/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana14/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana14/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana14/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana14/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil5/semana14/img9.jpg" download><img class="img-fluid"
        src="./images/infantil5/semana14/img9.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil5/semana14/img10.jpg" download><img class="img-fluid"
        src="./images/infantil5/semana14/img10.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil5/semana14/img11.jpg" download><img class="img-fluid"
        src="./images/infantil5/semana14/img11.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil5/semana14/img12.jpg" download><img class="img-fluid"
        src="./images/infantil5/semana14/img12.jpg" alt=""></a>
  </div>
</div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 13<br>  22/junho até 28/junho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana13/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana13/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana13/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana13/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana13/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana13/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana13/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana13/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana13/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana13/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana13/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana13/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana13/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana13/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana13/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana13/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil5/semana13/img9.jpg" download><img class="img-fluid"
        src="./images/infantil5/semana13/img9.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil5/semana13/img10.jpg" download><img class="img-fluid"
        src="./images/infantil5/semana13/img10.jpg" alt=""></a>
  </div>
</div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
<div class="container">
      <div class="text-center">
      
      <h1 class="color">(Provinha Infantil)<h1>
        <h2 class="mb-4">Tarefa semanal 12 - 15/junho até 22/junho</h2>
        <h3 class=mb-4>Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil V (5 anos) </h3>
        <p>Clique na imagem para baixar a prova</p>
      
      </div>
   

      <div class="text-center tarefas-img1">
      <div class="row">
          <div class="col-sm">
              <a href="./images/infantil5/semana12/infantil5.pdf" download="download">
              <img class="img-fluid" src="./images/provinha.jpg" alt=""></a>
          </div>
       </div>
     </div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 11 (Semana de Revisão)<br> - 08/junho até 15/junho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana11/img1.png" download><img class="img-fluid"
          src="./images/infantil5/semana11/img1.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana11/img2.png" download><img class="img-fluid"
          src="./images/infantil5/semana11/img2.png" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana11/img3.png" download><img class="img-fluid"
          src="./images/infantil5/semana11/img3.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana11/img4.jpeg" download><img class="img-fluid"
          src="./images/infantil5/semana11/img4.jpeg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana11/img5.jpeg" download><img class="img-fluid"
          src="./images/infantil5/semana11/img5.jpeg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana11/img6.png" download><img class="img-fluid"
          src="./images/infantil5/semana11/img6.png" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana11/img7.png" download><img class="img-fluid"
          src="./images/infantil5/semana11/img7.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana11/img8.png" download><img class="img-fluid"
          src="./images/infantil5/semana11/img8.png" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil5/semana11/img9.png" download><img class="img-fluid"
        src="./images/infantil5/semana11/img9.png" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil5/semana11/img10.png" download><img class="img-fluid"
        src="./images/infantil5/semana11/img10.png" alt=""></a>
  </div>
</div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
<div class="container">
      <div class="text-center">
      
      <h1 class="color">(Provinha Infantil)<h1>
        <h2 class="mb-4">Tarefa semanal 12 - 15/junho até 22/junho</h2>
        <h3 class=mb-4>Educação Infantil</h3>
        <h3 class=mb-4> Turma Infantil V (5 anos) </h3>
        <p>Clique no link para baixar a prova</p>
      
      </div>
   

  <div>
        <ul>
            <li><a class="lista-sugestoes" href="./images/./infantil5/./semana12/infantil5.pdf">Provinha</a></li>
               
        </ul>
        </div>
        </div>
        </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 10 - 01/junho até 05/junho</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana10/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana10/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana10/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana10/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana10/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana10/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana10/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana10/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana10/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana10/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana10/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana10/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana10/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana10/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana10/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana10/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil5/semana10/img9.png" download><img class="img-fluid"
        src="./images/infantil5/semana10/img9.png" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil5/semana10/img10.jpg" download><img class="img-fluid"
        src="./images/infantil5/semana10/img10.jpg" alt=""></a>
  </div>
</div>
<div class="row">
<div class="col-sm">
  <a href="./images/infantil5/semana10/img11.jpeg" download><img class="img-fluid"
      src="./images/infantil5/semana10/img11.jpeg" alt=""></a>
</div>
</div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 09 - 25/maio até 29/maio</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
  
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana9/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana9/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana9/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana9/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana9/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana9/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana9/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana9/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana9/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana9/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana9/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana9/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana9/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana9/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana9/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana9/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil5/semana9/img9.jpg" download><img class="img-fluid"
        src="./images/infantil5/semana9/img9.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil5/semana9/img10.jpg" download><img class="img-fluid"
        src="./images/infantil5/semana9/img10.jpg" alt=""></a>
  </div>
</div>
<div class="row">
<div class="col-sm">
  <a href="./images/infantil5/semana9/img11.jpg" download><img class="img-fluid"
      src="./images/infantil5/semana9/img11.jpg" alt=""></a>
</div>
</div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 08 - 18/maio até 22/maio</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana8/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana8/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana8/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana8/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana8/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana8/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana8/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana8/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana8/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana8/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana8/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana8/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana8/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana8/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana8/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana8/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil5/semana8/img9.jpg" download><img class="img-fluid"
        src="./images/infantil5/semana8/img9.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil5/semana8/img10.jpg" download><img class="img-fluid"
        src="./images/infantil5/semana8/img10.jpg" alt=""></a>
  </div>
</div>
<div class="row">
<div class="col-sm">
  <a href="./images/infantil5/semana8/img11.jpg" download><img class="img-fluid"
      src="./images/infantil5/semana8/img11.jpg" alt=""></a>
</div>
<div class="col-sm">
  <a href="./images/infantil5/semana8/img12.jpg" download><img class="img-fluid"
      src="./images/infantil5/semana8/img12.jpg" alt=""></a>
</div>
</div>
<div class="row">
<div class="col-sm">
  <a href="./images/infantil5/semana8/img13.jpg" download><img class="img-fluid"
      src="./images/infantil5/semana8/img13.jpg" alt=""></a>
</div>
<div class="col-sm">
  <a href="./images/infantil5/semana8/img14.jpg" download><img class="img-fluid"
      src="./images/infantil5/semana8/img14.jpg" alt=""></a>
</div>
</div>
<div class="row">
<div class="col-sm">
  <a href="./images/infantil5/semana8/img15.jpg" download><img class="img-fluid"
      src="./images/infantil5/semana8/img15.jpg" alt=""></a>
</div>
</div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
  
      <h1 class="mb-4">Tarefa semanal 07 - 13/maio até 15/maio</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana7/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana7/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana7/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana7/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana7/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana7/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana7/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana7/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana7/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana7/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana7/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana7/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana7/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana7/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana7/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana7/img8.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 06 - 02/maio até 12/maio</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <h1 class="mb-4 color"> (Trabalho dirigido) </h1>
      

   
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
  
      <h1 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img8.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana5/img9.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana5/img9.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img8.jpg" alt=""></a>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img9.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana4/img10.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana4/img10.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
  
      <h1 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img8.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img9.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img10.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img11.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img12.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img12.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana3/img13.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana3/img13.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana2/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana2/img7.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h1>
      <h3 class=mb-4> Educação Infantil</h3>
      <h3 class=mb-4> Turma Infantil V (5 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img1.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img2.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img3.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img4.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img5.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img6.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img7.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img8.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img9.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img10.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img10.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil5/semana1/img11.jpg" download><img class="img-fluid"
          src="./images/infantil5/semana1/img11.jpg" alt=""></a>
    </div>
  </div>
  </div>
  </div>
</section>
`;

var turma6 = ` <section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">

<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>1º ano<i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class=" text-center video-aula">
<h1>Aulas online</h1>
<h3>Senhores pais e/ou responsáveis, acesso as aulas remotas mediada por tecnologia.</h3>
<a class=" btn btn-secondary px-4 py-3 mt-3"  href="https://meet.jit.si/colegiogetsemanifundamentalI"> Clique para acessar a aula </a>
</div>
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Vídeo Aula semanal </h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 1º ano (6 anos)</h3>
  </div>
</div>
</section>

<section>
<div class="video1">
     <div class="container">
          <h3 class="titulob"> Vídeo educativo </h3>
        <div class="video-container">

          <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

         </div>
    </div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 01</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/2xCXEf5wT1Y" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 02 (Português) </h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/55aEBClI-W4" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 03 (Matemática) </h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/io_rqxM4NnI" frameborder="0"
   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 04(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/_2wiHNXO4bw" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 05(História)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xc7pfDXh_no" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 06(Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/sx70do3F7MY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 07(Ciências)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Lf7SRGwnfBc" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 08(Geografia)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/ueLyUIQ9OkA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 09(Ciências)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/UJbS-pexPNI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 10(História)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/72WxcYXv9DU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 11(Geografia)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/1SJJ4ZPrfIk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 12(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/gIRUfFNoQCw" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 13(Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/lf66TNNik_A" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 14(Português 01)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/mdkQfbpHjHU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 15(Português 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/puXqEhVTNp8" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 16</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/gQOR1O7HLCs" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 17 (Alimentação saudável)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/UxGUsbzciP0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 18 (Geografia) </h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/4fZhXYk5NyI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 19 (Matemática) </h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/fvoRiP4UvB8" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 20 (Inglês)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/cv9RC7nEpDY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 21 (Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/yOvYyJEP5fM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 22 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/4Zog-C3AkCU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 23 (Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/09wSXrU1fmM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 24 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ybWXGPhGT88" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 25 </h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/qtJiQvH4nHM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 26 (Inglês 01) </h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/fpd0aWJIGnI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 27 (Inglês 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/psGogkmA7GM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 28(Linguagem)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/J7TmSLwbRfM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 29(Linguagem)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/vHfv2bkL3M0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 30(Linguagem)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/YkmuI-wytEo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 31(linguagem)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/bYzHyc1o0Lg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 32 (linguagem K)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xbSuEay2c8Q" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 33 (linguagem J)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/4nHrLDkH6QI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 34 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/A1SQOL-qFbQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 35 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/LgHBU7OFSgQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 36 (Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/WHaD0zLjojk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 37 (História)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/GU17r9HBLsc" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 38 (Ciências 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/98OMVc7jRF0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 39 (Ciências 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ybRhUq0pPd8" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 40 (Português 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/67IKNHGV72g" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 41 (Português 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/EgH5j128M4s" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 42 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/MFAP_1ZBKEQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 43 (Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/jv5_JjLps4Y" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 44 (Geografia)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/sPB3ZePAAMc" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 45 (Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/oUWTxrBOEMU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 46 (Ciências)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/5zTg5gYJLNQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 47 </h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/VEHThfl6in4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>


<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 48 (Inglês) </h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/JPekA0GKiCw" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 49 (Matemática 01) </h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/og1lAiI15mI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 50 (Matemática 02) </h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/pEONlYeMt6o" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 51 (Matemática 03) </h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/B-RTMmvmogg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 52 (Português N)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/zQqJhTj7c-Y" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 53 (Português P)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/9JVmafl0NRs" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>


<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 54 (Ciências)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/nNoOABitwMA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 55 (História)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/-nNs8W_WEds" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 56 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/yVczhzmLqdk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 57 (Matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/yP9AYaaj37Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 58 (Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/Zcv0s8UOaMQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 59 (Matemática 03)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/QU4VFD9hgog" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 60 (Matemática 04)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/5U_yc5RQSKY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 61 (Português 01)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/J6ih_xZ4MPY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 62 (Português 02)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/i7E7CNFXTII" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 63 (Português 03)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/XaKnk6u2QvU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 64 (Ciências)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/7pHYVg78tPU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 65 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/LDCPBwnJBt4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 23 - 31/agosto até 06/setembro</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana23/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana23/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana23/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana23/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana23/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana23/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana23/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana23/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana23/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana23/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana23/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana23/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana23/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana23/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana23/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana23/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana23/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana23/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana23/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana23/img10.jpg" alt=""></a>
    </div>
      </div>
      </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 22 - 24/agosto até 30/agosto</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana22/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana22/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana22/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana22/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana22/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana22/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana22/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana22/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana22/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana22/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana22/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana22/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana22/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana22/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana22/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana22/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana22/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana22/img9.jpg" alt=""></a>
      </div>
      </div>
      </div>
  </div>
  </div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 21 - 17/agosto até 23/agosto</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana21/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana21/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana21/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana21/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana21/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana21/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana21/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana21/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana21/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana21/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana21/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana21/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana21/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana21/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana21/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana21/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana21/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana21/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana21/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana21/img10.jpg" alt=""></a>
      </div>
      </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 20 - 10/agosto até 16/agosto</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana20/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana20/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana20/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana20/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana20/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana20/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana20/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana20/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana20/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana20/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana20/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana20/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana20/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana20/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana20/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana20/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana20/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana20/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana20/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana20/img10.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana20/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana20/img11.jpg" alt=""></a>
      </div>
      </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 19 - 03/agosto até 09/agosto</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana19/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana19/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana19/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana19/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana19/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana19/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana19/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana19/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana19/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana19/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana19/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana19/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana19/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana19/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana19/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana19/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana19/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana19/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana19/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana19/img10.jpg" alt=""></a>
      </div>
      </div>
      </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 18 - 27/julho até 02/agosto</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana18/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana18/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana18/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana18/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana18/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana18/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana18/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana18/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana18/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana18/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana18/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana18/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana18/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana18/img7.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center prova">
      
        <h1 class="mb-4">Tarefa semanal 17 - 20/julho até 26/julho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <h1 class="color">(Recesso escolar)</h1>
     
    </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 16 - 13/julho até 19/julho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        
     
    </div>
  </div>
</section>

<section>
<div class="container text-center">
<h2>Prova de Inglês</h2>
<p>Clique na imagem para baixar a Prova</p>
<div class="text-center tarefas-img1">
<div class="row">
    <div class="col-sm">
        <a href="./images/infantil6/semana16/ingles6.docx" download="download">
        <img class="img-fluid" src="./images/kids.jpg" alt=""></a>
    </div>
 </div>
</div>
</div>
<div class="tarefas-img">
  <div class="container text-center">
  <h3>Tarefa Semanal</h3>
  <p>Clique nas imagens para baixar a tarefa</p>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana16/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana16/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana16/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana16/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana16/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana16/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana16/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana16/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana16/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana16/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana16/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana16/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana16/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana16/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana16/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana16/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana16/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana16/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana16/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana16/img10.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana16/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana16/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana16/img12.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana16/img12.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 15 - 06/julho até 12/julho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana15/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana15/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana15/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana15/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana15/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana15/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana15/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana15/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana15/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana15/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana15/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana15/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana15/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana15/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana15/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana15/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana15/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana15/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana15/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana15/img10.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana15/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana15/img11.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 14 - 29/junho até 05/julho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana14/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana14/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana14/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana14/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana14/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana14/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana14/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana14/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana14/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana14/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana14/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana14/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana14/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana14/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana14/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana14/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana14/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana14/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana14/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana14/img10.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana14/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana14/img11.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
    <div class="container">
      <div class="text-center">
      
        <h1 class="color">(Trabalho Avaliativo)<h1>
        <h2 class="mb-4">Tarefa semanal 13 - 22/junho até 28/junho</h2>
        <h3 class=mb-4>Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos) </h3>
        <p>Clique na imagem para baixar o desenvolvimento e o trabalho</p>
      
      </div>
      

      <div class="container">
      <div class="text-center tarefas-img2">
      <div class="row">
      <div class="col-lg-6 col-sm-6">
      <h5>Desenvolvimento</h5>
              <a href="./images/infantil6/semana13/desenvolvimento.pdf" download="download">
              <img class="img-fluid" src="./images/infantil6/semana13/desenvolvimento.jpg" alt=""></a>
          </div>
          <div class="col-lg-6 col-sm-6">
          <h5>Trabalho</h5>
          <a href="./images/infantil6/semana13/trabalho6e7.pdf" download="download">
          <img class="img-fluid" src="./images/infantil6/semana13/trabalho.jpg" alt=""></a>
      </div>
       
     </div>
     </div>
     </div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 12 - 15/junho até 22/junho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana12/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana12/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana12/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana12/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana12/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana12/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana12/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana12/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana12/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana12/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana12/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana12/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana12/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana12/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana12/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana12/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana12/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana12/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana12/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana12/img10.jpg" alt=""></a>
      </div>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
<div class="container">
      <div class="text-center">
      
     
        <h1 class="mb-4">Tarefa semanal 11 - 08/junho até 15/junho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <h1 class="color">(Semana de Provas)<h1>
      
      </div>
   


        </div>
        </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 10 (Semana de Revisão) - 01/junho até 05/junho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img1.png" download><img class="img-fluid"
            src="./images/infantil6/semana10/img1.png" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img2.png" download><img class="img-fluid"
            src="./images/infantil6/semana10/img2.png" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img3.png" download><img class="img-fluid"
            src="./images/infantil6/semana10/img3.png" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img4.png" download><img class="img-fluid"
            src="./images/infantil6/semana10/img4.png" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img5.jpeg" download><img class="img-fluid"
            src="./images/infantil6/semana10/img5.jpeg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img6.jpeg" download><img class="img-fluid"
            src="./images/infantil6/semana10/img6.jpeg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img7.png" download><img class="img-fluid"
            src="./images/infantil6/semana10/img7.png" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img8.png" download><img class="img-fluid"
            src="./images/infantil6/semana10/img8.png" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana10/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana10/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana10/img10.jpg" alt=""></a>
      </div>
      </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana10/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana10/img12.png" download><img class="img-fluid"
          src="./images/infantil6/semana10/img12.png" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img13.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana10/img13.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img14.png" download><img class="img-fluid"
            src="./images/infantil6/semana10/img14.png" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img15.png" download><img class="img-fluid"
            src="./images/infantil6/semana10/img15.png" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana10/img16.jpeg" download><img class="img-fluid"
            src="./images/infantil6/semana10/img16.jpeg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 09 - 25/maio até 29/maio</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana9/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana9/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana9/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana9/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana9/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana9/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana9/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana9/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana9/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana9/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana9/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana9/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana9/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana9/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana9/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana9/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana9/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana9/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana9/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana9/img10.jpg" alt=""></a>
      </div>
      </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana9/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana9/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana9/img12.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana9/img12.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana9/img13.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana9/img13.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 08 - 18/maio até 22/maio</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana8/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana8/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana8/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana8/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana8/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana8/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana8/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana8/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana8/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana8/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana8/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana8/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana8/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana8/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana8/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana8/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana8/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana8/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana8/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana8/img10.jpg" alt=""></a>
      </div>
      </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana8/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana8/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana8/img12.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana8/img12.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana8/img13.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana8/img13.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 07 - 13/maio até 15/maio</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana7/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana7/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana7/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana7/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana7/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana7/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana7/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana7/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana7/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana7/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana7/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana7/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana7/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana7/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana7/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana7/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana7/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana7/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana7/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana7/img10.jpg" alt=""></a>
      </div>
   </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana7/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana7/img11.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 06 - 02/maio até 12/maio</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 1º ano (6 anos)</h3>
      <h1 class="mb-4 color"> (Trabalho dirigido) </h1>
      
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana5/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana5/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana5/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana5/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana5/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana5/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana5/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana5/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana5/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana5/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana5/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana5/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana5/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana5/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana5/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana5/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana5/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana5/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana5/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana5/img10.jpg" alt=""></a>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana5/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana5/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana5/img12.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana5/img12.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana4/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana4/img10.jpg" alt=""></a>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img12.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img12.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img13.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img13.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana4/img14.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana4/img14.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
      <a href="./images/infantil6/semana3/img10.jpg" download><img class="img-fluid"
          src="./images/infantil6/semana3/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana3/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana3/img11.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano (6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana2/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana2/img9.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 1º ano(6 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img1.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img2.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img3.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img4.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img5.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img6.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img7.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img8.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img9.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img10.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img11.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img12.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img12.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img13.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img13.jpg" alt="" ></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil6/semana1/img14.jpg" download><img class="img-fluid"
            src="./images/infantil6/semana1/img14.jpg" alt="" ></a>
      </div>
    </div>
  </div>
  </div>
</section>`;

var turma7 = `<section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">

<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>2º ano <i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class=" text-center video-aula">
<h1>Aulas online</h1>
<h3>Senhores pais e/ou responsáveis, acesso as aulas remotas mediada por tecnologia.</h3>
<a class=" btn btn-secondary px-4 py-3 mt-3"  href="https://meet.jit.si/colegiogetsemanifundamentalII"> Clique para acessar a aula </a>
</div>
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Vídeo Aula semanal </h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>

  </div>
</div>
</section>

<section>
<div class="video1">
     <div class="container">
          <h3 class="titulob"> Vídeo educativo </h3>
        <div class="video-container">

          <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

         </div>
    </div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 01</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/GoK6bZOfEzs" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 02</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/CrakjZmsi-k" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 03(Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/a3T6_QfukDs" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 04(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/q9iLvFu3_s8" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 05(História)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xqOFHnncj98" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 06(Geografia)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/6y4jS2m8Mg0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 07(Ciências)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/5MfZ2p1DeCM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 08(História)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xc7pfDXh_no" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 09(Ciências)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Hqkndg6IQC4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 10(Geografia)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/t3xiWYDb8tU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 11(Geografia 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/sTFU3VhupUI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 12(História)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/5NDgpXGBJ4g" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 13(História 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/clkpTq5Xwz8" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 14(Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/4reGtnzDddw" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 15(Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/gAstseeFbRI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 16(Ciências)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/FAWZvCLHzGM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 17(Geografia)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/zsuGwcOO0jE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 18(História)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/nlTt_LOSWoA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 19(Ciências)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/lgc1bAmYjnE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 20(Geografia)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/krehgUBNe34" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 21(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/Fypu4CMit_o" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 22(Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xt1fHbD5ejk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 23(Ciências)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/ut87aGiMDms" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 24(Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/6d7okqDsQCU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 25(História)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/7UcO347wwjE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 26 (Alimentação saudável)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/UxGUsbzciP0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 27 (Matemática) </h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/37xN9IRVaZ0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 28 (Português) </h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/DdViJQK5udM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 29 (inglês)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/cv9RC7nEpDY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 30 (Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/a5ACJIoRJzo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 31 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/f9ymDvHh75U" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 32 (Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/UuiVPfaVVwE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 33 (Ciências)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/qhlJKPv-y8w" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 34 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ZrEnrsFfpPQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 35 (Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/WpM_sUUtJbk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 36 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/erOw4byT1X0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 37 (História 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/GU17r9HBLsc" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 38 (História 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/TiOR9KWwbsY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 39 (Ciências)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ybRhUq0pPd8" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 40 (Português 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/67IKNHGV72g" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 41 (Português 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/EgH5j128M4s" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 42 (Geografia)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/jztfrkf9PUo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 43 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/gldLz737lWY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 44 (Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xMtzxnTZpNk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 45 (Ciências)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/5zTg5gYJLNQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 46 </h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/VEHThfl6in4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 47 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/H1pa1Ox33AY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 48 (Português 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/y2bI9Sy_uEE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 49 (Português 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/9dZ59RWUPH4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 50 (Português 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/-zr5Eepluj4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 51 (Português 04)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/In9MVTxo814" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 52 (Português 05)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/GfRRJ6psNso" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 53 (Português 06)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/oPw0DEYc1-A" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 54 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/a68Mvp8jGeA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 55 (Ciências 01)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/jF5jpuSID4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 56 (Ciências 02)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/OveCQa21KP4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 57 (Ciências 03)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/-3ewvovU0sI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 58 (Ciências 04)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/ZuT12stgzZs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 59 (Geografia 01)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/yyu8ts2nZTI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 60 (Geografia 02)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/YF_lzstWkPQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 61 (Geografia 03)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/VQ6Y6m0bOIk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 62 (História)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/vQqOSpo40co" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 63 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/x5ygsbjotrw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 64 (Matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/uP-3tHt4SNc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 65 (Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/wUfkkvZwCoQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 66 (Matemática 03)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/Ato2JRyk0TM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 67 (Português 01)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/waIPnY6feQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 68 (Português 02)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/-TZuP_vCEb4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 69 (Português 03)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/Vo8A_YdMn0E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 70 (Português 04)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/EnURcaTLs2M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 71 (Geografia)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/QrJ4fvOtwE8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 23 - 31/agosto até 06/setembro</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana23/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana23/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana23/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana23/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana23/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana23/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana23/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana23/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana23/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana23/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana23/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana23/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana23/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana23/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana23/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana23/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana23/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana23/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana23/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana23/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana23/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana23/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana23/img12.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana23/img12.jpg" alt=""></a>
    </div>
    </div>
</div>
</div>
</section>





<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 22 - 24/agosto até 30/agosto</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana22/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana22/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana22/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana22/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana22/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana22/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana22/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana22/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana22/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana22/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana22/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana22/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana22/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana22/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana22/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana22/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana22/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana22/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana22/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana22/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana22/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana22/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana22/img12.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana22/img12.jpg" alt=""></a>
    </div>
    </div>
</div>
</div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 21 - 17/agosto até 23/agosto</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana21/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana21/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana21/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana21/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana21/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana21/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana21/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana21/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana21/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana21/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana21/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana21/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana21/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana21/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana21/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana21/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana21/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana21/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana21/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana21/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana21/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana21/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana21/img12.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana21/img12.jpg" alt=""></a>
    </div>
    </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 20 - 10/agosto até 16/agosto</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana20/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana20/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana20/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana20/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana20/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana20/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana20/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana20/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana20/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana20/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana20/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana20/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana20/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana20/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana20/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana20/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana20/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana20/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana20/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana20/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana20/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana20/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana20/img12.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana20/img12.jpg" alt=""></a>
    </div>
    </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 19 - 03/agosto até 09/agosto</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana19/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana19/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana19/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana19/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana19/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana19/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana19/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana19/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana19/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana19/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana19/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana19/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana19/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana19/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana19/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana19/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana19/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana19/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana19/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana19/img10.jpg" alt=""></a>
    </div>
    </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 18 - 27/julho até 02/agosto</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana18/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana18/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana18/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana18/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana18/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana18/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana18/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana18/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana18/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana18/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana18/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana18/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana18/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana18/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana18/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana18/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana18/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana18/img9.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center prova">
    
      <h1 class="mb-4">Tarefa semanal 17 - 20/julho até 26/julho</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <h1 class="color">(Recesso escolar)</h1>
    
  </div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 16 - 13/julho até 19/julho</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      
    
  </div>
</div>
</section>


<section>
<div class="container text-center">
<h2>Prova de Inglês</h2>
<p>Clique na imagem para baixar a Prova</p>
<div class="text-center tarefas-img1">
<div class="row">
    <div class="col-sm">
        <a href="./images/infantil7/semana16/ingles7.docx" download="download">
        <img class="img-fluid" src="./images/kids.jpg" alt=""></a>
    </div>
 </div>
</div>
</div>
<div class="tarefas-img">
<div class="container text-center">
<h3>Tarefa Semanal</h3>
<p>Clique nas imagens para baixar a tarefa</p>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana16/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana16/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana16/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana16/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana16/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana16/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana16/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana16/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana16/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana16/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana16/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana16/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana16/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana16/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana16/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana16/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana16/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana16/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana16/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana16/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana16/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana16/img11.jpg" alt=""></a>
  </div>
  <div class="col-sm">
  <a href="./images/infantil7/semana16/img12.jpg" download><img class="img-fluid"
      src="./images/infantil7/semana16/img12.jpg" alt=""></a>
</div>
  </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 15 - 06/julho até 12/julho</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana15/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana15/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana15/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana15/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana15/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana15/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana15/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana15/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana15/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana15/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana15/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana15/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana15/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana15/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana15/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana15/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana15/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana15/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana15/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana15/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana15/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana15/img11.jpg" alt=""></a>
  </div>
  </div>
</div>
</div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 14 - 29/junho até 05/julho</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img12.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img13.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img13.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana14/img14.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana14/img14.jpg" alt=""></a>
    </div>
  </div>
  </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
    <div class="container">
      <div class="text-center">
      
        <h1 class="color">(Trabalho Avaliativo)<h1>
        <h2 class="mb-4">Tarefa semanal 13 - 22/junho até 28/junho</h2>
        <h3 class=mb-4>Ensino Fundamental</h3>
        <h3 class=mb-4> 2º ano (7 anos) </h3>
        <p>Clique na imagem para baixar o desenvolvimento e o trabalho</p>
      
      </div>
      

      <div class="container">
      <div class="text-center tarefas-img2">
      <div class="row">
      <div class="col-lg-6 col-sm-6">
      <h5>Desenvolvimento</h5>
              <a href="./images/infantil7/semana13/desenvolvimento.pdf" download="download">
              <img class="img-fluid" src="./images/infantil6/semana13/desenvolvimento.jpg" alt=""></a>
          </div>
          <div class="col-lg-6 col-sm-6">
          <h5>Trabalho</h5>
          <a href="./images/infantil7/semana13/trabalho6e7.pdf" download="download">
          <img class="img-fluid" src="./images/infantil6/semana13/trabalho.jpg" alt=""></a>
      </div>
       
     </div>
     </div>
     </div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 12 - 15/junho até 22/junho</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana12/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana12/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana12/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana12/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana12/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana12/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana12/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana12/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana12/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana12/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana12/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana12/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana12/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana12/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana12/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana12/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana12/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana12/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana12/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana12/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana12/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana12/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana12/img12.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana12/img12.jpg" alt=""></a>
    </div>
  </div>
  </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
<div class="container">
      <div class="text-center">
      
     
        <h1 class="mb-4">Tarefa semanal 11 - 08/junho até 15/junho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 2º ano (7 anos)</h3>
        <h1 class="color">(Semana de Provas)<h1>
      </div>
   

 
        </div>
        </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 10 (Semana de Revisão) - 01/junho até 05/junho</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img1.png" download><img class="img-fluid"
          src="./images/infantil7/semana10/img1.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img2.jpeg" download><img class="img-fluid"
          src="./images/infantil7/semana10/img2.jpeg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana10/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img4.png" download><img class="img-fluid"
          src="./images/infantil7/semana10/img4.png" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img5.png" download><img class="img-fluid"
          src="./images/infantil7/semana10/img5.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana10/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img7.jpeg" download><img class="img-fluid"
          src="./images/infantil7/semana10/img7.jpeg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img8.png" download><img class="img-fluid"
          src="./images/infantil7/semana10/img8.png" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana10/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img10.png" download><img class="img-fluid"
          src="./images/infantil7/semana10/img10.png" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana10/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img12.png" download><img class="img-fluid"
          src="./images/infantil7/semana10/img12.png" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img13.jpeg" download><img class="img-fluid"
          src="./images/infantil7/semana10/img13.jpeg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana10/img14.png" download><img class="img-fluid"
          src="./images/infantil7/semana10/img14.png" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 09 - 25/maio até 29/maio</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana9/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana9/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana9/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana9/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana9/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana9/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana9/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana9/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana9/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana9/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana9/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana9/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana9/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana9/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana9/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana9/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana9/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana9/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana9/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana9/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana9/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana9/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana9/img12.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana9/img12.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 08 - 18/maio até 22/maio</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana8/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana8/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana8/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana8/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana8/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana8/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana8/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana8/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana8/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana8/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana8/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana8/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana8/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana8/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana8/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana8/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana8/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana8/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana8/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana8/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana8/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana8/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana8/img12.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana8/img12.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 07 - 13/maio até 15/maio</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana7/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana7/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana7/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana7/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana7/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana7/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana7/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana7/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana7/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana7/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana7/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana7/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana7/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana7/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana7/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana7/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana7/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana7/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana7/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana7/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana7/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana7/img11.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 06 - 02/maio até 12/maio</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <h1 class="mb-4 color"> (Trabalho dirigido) </h1>
      
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
   
      <h1 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana5/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana5/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana5/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana5/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana5/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana5/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana5/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana5/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana5/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana5/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana5/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana5/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana5/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana5/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana5/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana5/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana5/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana5/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana5/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana5/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana5/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana5/img11.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img12.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img13.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img13.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img14.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img14.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana4/img15.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana4/img15.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img8.jpg" alt=""></a>
    </div>
 </div>
 <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana3/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana3/img10.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>


<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana2/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana2/img8.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
    
      <h1 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 2º ano (7 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img1.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img2.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img3.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img4.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img5.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img6.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img7.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img8.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img9.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img10.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img10.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img11.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img12.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img13.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img13.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img14.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img14.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img15.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img15.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil7/semana1/img16.jpg" download><img class="img-fluid"
          src="./images/infantil7/semana1/img16.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>`;

var turma8 = ` <section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">

<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>3º ano <i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class=" text-center video-aula">
<h1>Aulas online</h1>
<h3>Senhores pais e/ou responsáveis, acesso as aulas remotas mediada por tecnologia.</h3>
<a class=" btn btn-secondary px-4 py-3 mt-3"  href="https://meet.jit.si/colegiogetsemanifundamentalIII"> Clique para acessar a aula </a>
</div>
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Vídeo Aula semanal </h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 3º ano (8 anos)</h3>

  </div>
</div>
</section>

<section>
<div class="video1">
     <div class="container">
          <h3 class="titulob"> Vídeo educativo </h3>
        <div class="video-container">

          <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

         </div>
    </div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 01(Português)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/2gv7wYKjsXA" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>


<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 02(Matemática)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/UDncpTaaA9I" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 03(português)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/mZVqXMQlDzg" frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 04(Ciências)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/IWE_gUl79xI" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 05(História)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/5ecAMuP1RQk" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 06(Geografia)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/9MyRKwqZBUo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 07(Artes)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/rvA8kY1R5DI" frameborder="0"
   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 08(Português 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/KDoE3Y-c96o" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 09(Português 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ftQm1bnCZuA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 10(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/jEwE2NIRsC0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 11(História)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xc7pfDXh_no" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 12(Matemática 01)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/PF9qlpR8Xfs" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 13(Matemática 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/e0lHWt7rA3c" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>


<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 14(Matemática 03)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/XVU4ABRXqbM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 15(Ciências)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Y1er3OsM1Ds" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 16(Geografia 01)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/rPoGwHpBIyk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 17(Geografia 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Koyq2BILmSU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 18(Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/_6b9lINqi6E" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 19(Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/7n5osyRSsr8" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 20(Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/pvsRnDxItQo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 21(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/Fhvqhj-OVmU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 22(Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/rTLGVTT8qX8" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 23(Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/ohwkxjNNcnY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 24 (Alimentação saudável)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/UxGUsbzciP0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 25 (Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/EJcYEqgIEKQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 26 (Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/LsC4c6yugmE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 27 (Inglês)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/25RjWI-g2_s" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 28 (Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/lEUcAg8D4bE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 29</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/t7760yyziXQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 30 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/RT49QaKgO9E" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 31 (Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/PsKiV-Ry6W4" frameborder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 32 (Matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/SNwpFIZO57k" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 33 (Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/2fV790UX3ik" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 34 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/U9ZIoNsGb-k" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 35 (História)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/AnWCltH00q0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 36 (Geografia)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/jztfrkf9PUo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 37 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/2gVLbs1iD0o" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 38 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/A7MWqdvSXRY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 39 (Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/w2mOw2TB2a4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 40 (Ciências)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/5zTg5gYJLNQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 41</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/VEHThfl6in4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 42 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/SG0sca55arg" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 43 (Matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/oHN-nPXGcdc" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 44 (Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/OaCQsQipR2U" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 45 (Matemática 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/yJtT3H-wNP4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 46(Português 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/JUN4e_bNEAE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 47(Português 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/-_-XDdNG2DI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 48(Geografia 01)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/CQEUQeg69LA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 49(Geografia 02)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/TntOxnNgjvI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 50(Geografia 03)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/pG37WbJP9SU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 51(Matenática 01)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/wEr2nx1qFiE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 52(Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/zIotxvswWKk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 53(Matemática 03)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/5rC1ttARp24" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 54(Matemática 04)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/gLTzSOjDVgc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 55(Português 01)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/U0WoiIAUR4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 56(Português 02)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/gl8O-tzevgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 57(Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/dIx7uQBvEqE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 23 - 31/agosto até 06/setembro</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana23/img1.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana23/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana23/img2.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana23/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana23/img3.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana23/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana23/img4.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana23/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana23/img5.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana23/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana23/img6.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana23/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana23/img7.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana23/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana23/img8.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana23/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana23/img9.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana23/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana23/img10.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana23/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil8/semana23/img11.jpg" download><img class="img-fluid"
          src="./images/infantil8/semana23/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil8/semana23/img12.jpg" download><img class="img-fluid"
          src="./images/infantil8/semana23/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil8/semana23/img13.jpg" download><img class="img-fluid"
        src="./images/infantil8/semana23/img13.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil8/semana23/img14.jpg" download><img class="img-fluid"
        src="./images/infantil8/semana23/img14.jpg" alt=""></a>
  </div>
</div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 22 - 24/agosto até 30/agosto</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana22/img1.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana22/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana22/img2.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana22/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana22/img3.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana22/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana22/img4.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana22/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana22/img5.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana22/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana22/img6.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana22/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana22/img7.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana22/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana22/img8.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana22/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana22/img9.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana22/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana22/img10.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana22/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil8/semana22/img11.jpg" download><img class="img-fluid"
          src="./images/infantil8/semana22/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil8/semana22/img12.jpg" download><img class="img-fluid"
          src="./images/infantil8/semana22/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil8/semana22/img13.jpg" download><img class="img-fluid"
        src="./images/infantil8/semana22/img13.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil8/semana22/img14.jpg" download><img class="img-fluid"
        src="./images/infantil8/semana22/img14.jpg" alt=""></a>
  </div>
</div>
  </div>
  </div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 21 - 17/agosto até 23/agosto</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana21/img1.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana21/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana21/img2.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana21/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana21/img3.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana21/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana21/img4.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana21/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana21/img5.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana21/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana21/img6.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana21/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana21/img7.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana21/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana21/img8.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana21/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana21/img9.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana21/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana21/img10.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana21/img10.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 20 - 10/agosto até 16/agosto</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana20/img1.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana20/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana20/img2.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana20/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana20/img3.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana20/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana20/img4.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana20/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana20/img5.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana20/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana20/img6.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana20/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana20/img7.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana20/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana20/img8.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana20/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana20/img9.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana20/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana20/img10.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana20/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil8/semana20/img11.jpg" download><img class="img-fluid"
          src="./images/infantil8/semana20/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
    <a href="./images/infantil8/semana20/img12.jpg" download><img class="img-fluid"
        src="./images/infantil8/semana20/img12.jpg" alt=""></a>
  </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil8/semana20/img13.jpg" download><img class="img-fluid"
          src="./images/infantil8/semana20/img13.jpg" alt=""></a>
    </div>
      </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 19 - 03/agosto até 09/agosto</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana19/img1.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana19/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana19/img2.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana19/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana19/img3.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana19/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana19/img4.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana19/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana19/img5.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana19/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana19/img6.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana19/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana19/img7.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana19/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana19/img8.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana19/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana19/img9.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana19/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana19/img10.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana19/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil8/semana19/img11.jpg" download><img class="img-fluid"
          src="./images/infantil8/semana19/img11.jpg" alt=""></a>
    </div>
  </div>
      </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 18 - 27/julho até 02/agosto</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana18/img1.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana18/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana18/img2.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana18/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana18/img3.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana18/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana18/img4.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana18/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana18/img5.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana18/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana18/img6.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana18/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana18/img7.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana18/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana18/img8.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana18/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana18/img9.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana18/img9.jpg" alt=""></a>
    </div>
  </div>
      </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center prova">
      
        <h1 class="mb-4">Tarefa semanal 17 - 20/julho até 26/julho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <h1 class="color">(Recesso escolar) </h1>
     
    </div>
  </div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 16 - 13/julho até 19/julho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        
     
    </div>
  </div>
</section>

<section>
<div class="container text-center">
<h2>Prova de Inglês</h2>
<p>Clique na imagem para baixar a Prova</p>
<div class="text-center tarefas-img1">
<div class="row">
    <div class="col-sm">
        <a href="./images/infantil8/semana16/ingles8.docx" download="download">
        <img class="img-fluid" src="./images/kids.jpg" alt=""></a>
    </div>
 </div>
</div>
</div>
<div class="tarefas-img">
  <div class="container text-center">
  <h3>Tarefa Semanal</h3>
  <p>Clique nas imagens para baixar a tarefa</p>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana16/img1.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana16/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana16/img2.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana16/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana16/img3.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana16/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana16/img4.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana16/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana16/img5.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana16/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana16/img6.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana16/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana16/img7.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana16/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana16/img8.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana16/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana16/img9.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana16/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana16/img10.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana16/img10.jpg" alt=""></a>
      </div>
  </div>
      </div>
  </div>
  </div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 15 - 06/julho até 12/julho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana15/img1.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana15/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana15/img2.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana15/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana15/img3.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana15/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana15/img4.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana15/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana15/img5.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana15/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana15/img6.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana15/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana15/img7.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana15/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana15/img8.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana15/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana15/img9.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana15/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana15/img10.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana15/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil8/semana15/img11.jpg" download><img class="img-fluid"
          src="./images/infantil8/semana15/img11.jpg" alt=""></a>
    </div>
  </div>
      </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 14 - 29/junho até 05/julho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana14/img1.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana14/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana14/img2.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana14/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana14/img3.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana14/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana14/img4.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana14/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana14/img5.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana14/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana14/img6.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana14/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana14/img7.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana14/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana14/img8.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana14/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana14/img9.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana14/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana14/img10.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana14/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil8/semana14/img11.jpg" download><img class="img-fluid"
          src="./images/infantil8/semana14/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil8/semana14/img12.jpg" download><img class="img-fluid"
          src="./images/infantil8/semana14/img12.jpg" alt=""></a>
    </div>
  </div>
      </div>
  </div>
  </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
    <div class="container">
      <div class="text-center">
      
        <h1 class="color">(Trabalho Avaliativo)<h1>
        <h2 class="mb-4">Tarefa semanal 13 - 22/junho até 28/junho</h2>
        <h3 class=mb-4>Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos) </h3>
        <p>Clique na imagem para baixar o desenvolvimento e o trabalho</p>
      
      </div>
      

      <div class="container">
      <div class="text-center tarefas-img2">
      <div class="row">
      <div class="col-lg-6 col-sm-6">
      <h5>Desenvolvimento</h5>
              <a href="./images/infantil8/semana13/desenvolvimento.pdf" download="download">
              <img class="img-fluid" src="./images/infantil6/semana13/desenvolvimento.jpg" alt=""></a>
          </div>
          <div class="col-lg-6 col-sm-6">
          <h5>Trabalho</h5>
          <a href="./images/infantil8/semana13/trabalho8e9.pdf" download="download">
          <img class="img-fluid" src="./images/infantil6/semana13/trabalho.jpg" alt=""></a>
      </div>
       
     </div>
     </div>
     </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 12 - 15/junho até 22/junho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana12/img1.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana12/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana12/img2.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana12/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana12/img3.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana12/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana12/img4.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana12/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana12/img5.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana12/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana12/img6.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana12/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana12/img7.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana12/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana12/img8.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana12/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana12/img9.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana12/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana12/img10.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana12/img10.jpg" alt=""></a>
      </div>
    </div>
      </div>
  </div>
  </div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
<div class="container">
      <div class="text-center">
      
      
        <h1 class="mb-4">Tarefa semanal 11 - 08/junho até 15/junho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <h1 class="color">(Semana de Provas)<h1>
      
      </div>
   
        </div>
        </div>
</section>



<section>
<div class="text-center">
<h1 class="mb-4">Tarefa semanal 10 (Semana de Revisão) - 01/junho até 05/junho </h1>
        <h3 class="mb-4"> Ensino Fundamental </h3>
        <h3 class="mb-4"> 3º ano (8 anos) </h3>
        <p class="mb-4"> clique no link para baixar a tarefa </p>
        </div>
        <div>
        <ul>
            <li><a class="lista-sugestoes" href="./images/./infantil8/./semana10/portugues.docx">Revisão de Português</a></li>
            <li><a class="lista-sugestoes" href="./images/./infantil8/./semana10/matematica.docx">Revisão de Matemática</a></li>
            <li><a class="lista-sugestoes" href="./images/./infantil8/./semana10/geografia.docx">Revisão de Geografia</a></li>
            <li><a class="lista-sugestoes" href="./images/./infantil8/./semana10/historia.docx">Revisão de História</a></li>
            <li><a class="lista-sugestoes" href="./images/./infantil8/./semana10/ciencias.pdf">Revisão de Ciências</a></li>

            
        </ul>
        </div>
        <div class="container">
        <div class="row">
          <div class="col-sm">
            <a href="./images/infantil8/semana10/img1.jpeg" download><img class="img-fluid"
                src="./images/infantil8/semana10/img1.jpeg" alt=""></a>
          </div>
          </div>
          </div>
        </section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 09 - 25/maio até 29/maio</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana9/img1.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana9/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana9/img2.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana9/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana9/img3.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana9/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana9/img4.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana9/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana9/img5.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana9/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana9/img6.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana9/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana9/img7.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana9/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana9/img8.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana9/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana9/img9.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana9/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana9/img10.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana9/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana9/img11.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana9/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana9/img12.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana9/img12.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana9/img13.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana9/img13.jpg" alt=""></a>
      </div>
      </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 08 - 18/maio até 22/maio</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana8/img1.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana8/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana8/img2.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana8/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana8/img3.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana8/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana8/img4.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana8/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana8/img5.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana8/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana8/img6.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana8/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana8/img7.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana8/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana8/img8.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana8/img8.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana8/img9.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana8/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana8/img10.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana8/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana8/img11.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana8/img11.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 07 - 13/maio até 15/maio</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img1.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img2.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img3.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img4.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img5.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img6.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img7.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img8.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img8.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img9.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img10.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img11.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img12.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img12.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img13.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img13.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img14.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img14.jpg" alt=""></a>
      </div>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img15.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img15.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana7/img16.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana7/img16.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 06 - 02/maio até 12/maio</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 3º ano (8 anos)</h3>
      <h1 class="mb-4 color"> (Trabalho dirigido) </h1>
      
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
    
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana5/img1.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana5/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana5/img2.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana5/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana5/img3.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana5/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana5/img4.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana5/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana5/img5.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana5/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana5/img6.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana5/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana5/img7.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana5/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana5/img8.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana5/img8.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana5/img9.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana5/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana5/img10.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana5/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana5/img11.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana5/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana5/img12.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana5/img12.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
      
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img1.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img2.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img3.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img4.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img5.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img6.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img7.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img8.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img8.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img9.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img10.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img11.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img12.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img12.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img13.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img13.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img14.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img14.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img15.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img15.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana4/img16.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana4/img16.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img1.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img2.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img3.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img4.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img5.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img6.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img7.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img8.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img8.jpg" alt=""></a>
      </div>
      <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img9.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img10.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img11.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img12.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img12.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img13.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img13.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img14.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img14.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img15.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img15.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana3/img16.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana3/img16.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
      
        <h1 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
      
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img1.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img2.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img3.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img4.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img5.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img6.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img7.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana2/img8.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana2/img8.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
  <div class="container">
    <div class="text-center">
     
        <h1 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 3º ano (8 anos)</h3>
        <p>Clique nas imagens para baixar a tarefa</p>
     
    </div>
  </div>
</section>

<section>
<div class="tarefas-img">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img1.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img1.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img2.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img2.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img3.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img3.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img4.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img4.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img5.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img5.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img6.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img6.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img7.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img7.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img8.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img8.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img9.jpgg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img9.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img10.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img10.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img11.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img11.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img12.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img12.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img13.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img13.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img14.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img14.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img15.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img15.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img16.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img16.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img17.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img17.jpg" alt=""></a>
      </div>
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img18.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img18.jpg" alt=""></a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <a href="./images/infantil8/semana1/img19.jpg" download><img class="img-fluid"
            src="./images/infantil8/semana1/img19.jpg" alt=""></a>
      </div>
    </div>
  </div>
  </div>
</section>`;

var turma9 = ` <section class="hero-wrap hero-wrap-2"
style="background-image: url('./images/gerenciamento-de-tarefas-670x419.png');">

<div class="container">
  <div class="row no-gutters slider-text align-items-center justify-content-center">
    <div class="col-md-9  text-center">
      <h1 class="mb-2 bread">Tarefas</h1>
      <p class="breadcrumbs"><span class="mr-2"><a href="./index.html">Home <i
              class="ion-ios-arrow-forward"></i></a></span> <span>Tarefas <i
            class="ion-ios-arrow-forward"></i></span> <span>4º ano <i class="ion-ios-arrow-forward"></i></span>
      </p>
    </div>
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class=" text-center video-aula">
<h1>Aulas online</h1>
<h3>Senhores pais e/ou responsáveis, acesso as aulas remotas mediada por tecnologia.</h3>
<a class=" btn btn-secondary px-4 py-3 mt-3"  href="https://meet.jit.si/colegiogetsemanifundamentalIV"> Clique para acessar a aula </a>
</div>
<div class="container">
  <div class="text-center">
   
   
      <h1 class="mb-4">Vídeo Aula semanal </h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>

  </div>
</div>
</section>

<section>
<div class="video1">
     <div class="container">
          <h3 class="titulob"> Vídeo educativo </h3>
        <div class="video-container">

          <iframe width="1311" height="480" src="https://www.youtube.com/embed/kZvow_QvuJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

         </div>
    </div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 01(Português)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/2gv7wYKjsXA" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>


<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 02(Matemática)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/UDncpTaaA9I" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 03(português)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/mZVqXMQlDzg" frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 04(Ciências)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/IWE_gUl79xI" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 05(História)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/5ecAMuP1RQk" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 06(Geografia)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/9MyRKwqZBUo" frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 07(Artes)</h3>
<div class="video-container">

  <iframe width="1311" height="480" src="https://www.youtube.com/embed/rvA8kY1R5DI" frameborder="0"
   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 08(Português 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/KDoE3Y-c96o" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 09(Português 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/ftQm1bnCZuA" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 10(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/jEwE2NIRsC0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 11(História)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/xc7pfDXh_no" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 12(Matemática 01)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/PF9qlpR8Xfs" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 13(Matemática 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/e0lHWt7rA3c" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>


<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 14(Matemática 03)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/XVU4ABRXqbM" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 15(Ciências)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Y1er3OsM1Ds" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 16(Geografia 01)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/rPoGwHpBIyk" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 17(Geografia 02)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/Koyq2BILmSU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 18(Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/_6b9lINqi6E" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 19(Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/7n5osyRSsr8" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 20(Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/pvsRnDxItQo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 21(Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/Fhvqhj-OVmU" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 22(Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/rTLGVTT8qX8" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 23(Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/ohwkxjNNcnY" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 24 (Alimentação saudável)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/UxGUsbzciP0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 25 (Matemática)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/EJcYEqgIEKQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 26 (Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/LsC4c6yugmE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 27 (Inglês)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/25RjWI-g2_s" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 28 (Português)</h3>
<div class="video-container">

<iframe width="969" height="480" src="https://www.youtube.com/embed/lEUcAg8D4bE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 29</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/t7760yyziXQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 30 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/RT49QaKgO9E" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 31 (Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/PsKiV-Ry6W4" frameborder="0"
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 32 (Matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/SNwpFIZO57k" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 33 (Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/2fV790UX3ik" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 34 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/U9ZIoNsGb-k" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 35 (História)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/AnWCltH00q0" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 36 (Geografia)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/jztfrkf9PUo" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 37 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/2gVLbs1iD0o" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 38 (Matemática)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/A7MWqdvSXRY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 39 (Português)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/w2mOw2TB2a4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 40 (Ciências)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/5zTg5gYJLNQ" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 41</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/VEHThfl6in4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 42 (Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/mx3o3VRv79s" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 43 (Matemática 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/oHN-nPXGcdc" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 44 (Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/OaCQsQipR2U" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 45 (Matemática 03)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/yJtT3H-wNP4" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 46(Português 01)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/JUN4e_bNEAE" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 47(Português 02)</h3>
<div class="video-container">

<iframe width="1311" height="480" src="https://www.youtube.com/embed/-_-XDdNG2DI" frameborder="0"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 48(Geografia 01)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/CQEUQeg69LA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 49(Geografia 02)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/TntOxnNgjvI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video2">
<div class="container">
<h3 class="titulob"> Vídeo aula 50(Geografia 03)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/pG37WbJP9SU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 51(Matenática 01)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/wEr2nx1qFiE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video3">
<div class="container">
<h3 class="titulob"> Vídeo aula 52(Matemática 02)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/zIotxvswWKk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 53(Matemática 03)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/5rC1ttARp24" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video4">
<div class="container">
<h3 class="titulob"> Vídeo aula 54(Matemática 04)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/gLTzSOjDVgc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 55(Português 01)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/U0WoiIAUR4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video1">
<div class="container">
<h3 class="titulob"> Vídeo aula 56(Português 02)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/gl8O-tzevgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>

<div class="video">
<div class="container">
<h3 class="titulo"> Vídeo aula 57(Inglês)</h3>
<div class="video-container">

<iframe width="1311" height="489" src="https://www.youtube.com/embed/qfODm5_Cijw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 23 - 31/agosto até 06/setembro</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana23/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana23/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana23/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana23/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana23/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana23/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana23/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana23/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana23/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana23/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana23/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana23/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana23/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana23/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana23/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana23/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana23/img9.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana23/img9.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil9/semana23/img10.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana23/img10.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana23/img11.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana23/img11.jpg" alt=""></a>
  </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 22 - 24/agosto até 30/agosto</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana22/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana22/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana22/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana22/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana22/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana22/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana22/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana22/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana22/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana22/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana22/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana22/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana22/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana22/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana22/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana22/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana22/img9.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana22/img9.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil9/semana22/img10.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana22/img10.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana22/img11.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana22/img11.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil9/semana22/img12.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana22/img12.jpg" alt=""></a>
  </div>
  </div>
  </div>
</div>
</div>
</section>





<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 21 - 17/agosto até 23/agosto</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana21/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana21/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana21/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana21/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana21/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana21/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana21/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana21/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana21/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana21/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana21/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana21/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana21/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana21/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana21/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana21/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana21/img9.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana21/img9.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil9/semana21/img10.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana21/img10.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana21/img11.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana21/img11.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil9/semana21/img12.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana21/img12.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana21/img13.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana21/img13.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil9/semana21/img14.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana21/img14.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana21/img15.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana21/img15.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil9/semana21/img16.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana21/img16.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana21/img17.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana21/img17.jpg" alt=""></a>
  </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 20 - 10/agosto até 16/agosto</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana20/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana20/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana20/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana20/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana20/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana20/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana20/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana20/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana20/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana20/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana20/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana20/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana20/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana20/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana20/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana20/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana20/img9.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana20/img9.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil9/semana20/img10.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana20/img10.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana20/img11.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana20/img11.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil9/semana20/img12.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana20/img12.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana20/img13.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana20/img13.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil9/semana20/img14.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana20/img14.jpg" alt=""></a>
  </div>
</div>
<div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana20/img15.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana20/img15.jpg" alt=""></a>
  </div>
  <div class="col-sm">
    <a href="./images/infantil9/semana20/img16.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana20/img16.jpg" alt=""></a>
  </div>
</div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 18 - 27/julho até 02/agosto</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana18/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana18/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana18/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana18/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana18/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana18/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana18/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana18/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana18/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana18/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana18/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana18/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana18/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana18/img7.jpg" alt=""></a>
    </div>
  </div>
  </div>
</div>
</div>
</section>




<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center prova">
    
      <h1 class="mb-4">Tarefa semanal 17 - 20/julho até 26/julho</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
     <h1 class="color">(Recesso escolar) </h1>
    
  </div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 16 - 13/julho até 19/julho</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
     
    
  </div>
</div>
</section>

<section>
<div class="container text-center">
<h2>Prova de Inglês</h2>
<p>Clique na imagem para baixar a Prova</p>
<div class="text-center tarefas-img1">
<div class="row">
    <div class="col-sm">
        <a href="./images/infantil9/semana16/ingles9.docx" download="download">
        <img class="img-fluid" src="./images/kids.jpg" alt=""></a>
    </div>
 </div>
</div>
</div>
<div class="tarefas-img">
<div class="container text-center">
<h3>Tarefa Semanal</h3>
<p>Clique nas imagens para baixar a tarefa</p>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana16/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana16/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana16/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana16/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana16/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana16/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana16/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana16/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana16/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana16/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana16/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana16/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana16/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana16/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana16/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana16/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana16/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana16/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana16/img10.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana16/img10.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana16/img11.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana16/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana16/img12.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana16/img12.jpg" alt=""></a>
    </div>
  </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 15 - 06/julho até 12/julho</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img10.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img10.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img11.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img12.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img13.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img13.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img14.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img14.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img15.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img15.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana15/img16.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana15/img16.jpg" alt=""></a>
    </div>
  </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 14 - 29/junho até 05/julho</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img10.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img10.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img11.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img12.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img13.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img13.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img14.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img14.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img15.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img15.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana14/img16.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana14/img16.jpg" alt=""></a>
    </div>
  </div>
  </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
    <div class="container">
      <div class="text-center">
      
        <h1 class="color">(Trabalho Avaliativo)<h1>
        <h2 class="mb-4">Tarefa semanal 13 - 22/junho até 28/junho</h2>
        <h3 class=mb-4>Ensino Fundamental</h3>
        <h3 class=mb-4> 4º ano (9 anos) </h3>
        <p>Clique na imagem para baixar o desenvolvimento e o trabalho</p>
      
      </div>
      

      <div class="container">
      <div class="text-center tarefas-img2">
      <div class="row">
      <div class="col-lg-6 col-sm-6">
      <h5>Desenvolvimento</h5>
              <a href="./images/infantil9/semana13/desenvolvimento.pdf" download="download">
              <img class="img-fluid" src="./images/infantil6/semana13/desenvolvimento.jpg" alt=""></a>
          </div>
          <div class="col-lg-6 col-sm-6">
          <h5>Trabalho</h5>
          <a href="./images/infantil9/semana13/trabalho8e9.pdf" download="download">
          <img class="img-fluid" src="./images/infantil6/semana13/trabalho.jpg" alt=""></a>
      </div>
       
     </div>
     </div>
     </div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 12 - 15/junho até 22/junho</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana12/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana12/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana12/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana12/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana12/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana12/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana12/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana12/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana12/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana12/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana12/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana12/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana12/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana12/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana12/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana12/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana12/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana12/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana12/img10.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana12/img10.jpg" alt=""></a>
    </div>
  </div>
  </div>
</div>
</div>
</section>



<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="prova"
<div class="container">
      <div class="text-center">
      
      
        <h1 class="mb-4">Tarefa semanal 11 - 08/junho até 15/junho</h1>
        <h3 class=mb-4> Ensino Fundamental</h3>
        <h3 class=mb-4> 4º ano (9 anos)</h3>
        <h1 class="color">(Semana de Provas)<h1>
      
      </div>
   
        </div>
        </div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 10 (Semana de Revisão) - 01/junho até 05/junho</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana10/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana10/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana10/img2.jpeg" download><img class="img-fluid"
          src="./images/infantil9/semana10/img2.jpeg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana10/img3.png" download><img class="img-fluid"
          src="./images/infantil9/semana10/img3.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana10/img4.png" download><img class="img-fluid"
          src="./images/infantil9/semana10/img4.png" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana10/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana10/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana10/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana10/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana10/img7.png" download><img class="img-fluid"
          src="./images/infantil9/semana10/img7.png" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana10/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana10/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana10/img9.png" download><img class="img-fluid"
          src="./images/infantil9/semana10/img9.png" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 09 - 25/maio até 29/maio</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana9/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana9/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana9/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana9/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana9/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana9/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana9/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana9/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana9/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana9/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana9/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana9/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana9/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana9/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana9/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana9/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana9/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana9/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana9/img10.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana9/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana9/img11.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana9/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana9/img12.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana9/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana9/img13.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana9/img13.jpg" alt=""></a>
  </div>
  <div class="col-sm">
      <a href="./images/infantil9/semana9/img14.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana9/img14.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana9/img15.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana9/img15.jpg" alt=""></a>
  </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 08 - 18/maio até 22/maio</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana8/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana8/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana8/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana8/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana8/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana8/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana8/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana8/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana8/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana8/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana8/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana8/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana8/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana8/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana8/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana8/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana8/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana8/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana8/img10.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana8/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana8/img11.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana8/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana8/img12.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana8/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
  <div class="col-sm">
    <a href="./images/infantil9/semana8/img13.jpg" download><img class="img-fluid"
        src="./images/infantil9/semana8/img13.jpg" alt=""></a>
  </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 07 - 13/maio até 15/maio</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana7/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana7/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana7/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana7/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana7/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana7/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana7/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana7/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana7/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana7/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana7/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana7/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana7/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana7/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana7/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana7/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana7/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana7/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana7/img10.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana7/img10.jpg" alt=""></a>
    </div>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana7/img11.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana7/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana7/img12.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana7/img12.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 06 - 02/maio até 12/maio</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <h1 class="mb-4 color"> (Trabalho dirigido) </h1>
      

    
  </div>
</div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
    
      <h1 class="mb-4">Tarefa semanal 05 - 27/abril até 01/maio</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana5/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana5/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana5/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana5/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana5/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana5/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana5/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana5/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana5/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana5/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana5/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana5/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana5/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana5/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana5/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana5/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana5/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana5/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana5/img10.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana5/img10.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 04 - 20/abril até 24/abril</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img10.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img10.jpg" alt=""></a>
    </div>
    <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img11.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img12.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img13.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img13.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana4/img14.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana4/img14.jpg" alt=""></a>
    </div>
    </div>
  </div>
  </div>
  </section>

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
   
      <h1 class="mb-4">Tarefa semanal 03 - 13/abril até 17/abril</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
   
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana3/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana3/img9.jpg" alt=""></a>
    </div>
    </div>
  </div>
  </div>
  </section>
  

<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
   
      <h1 class="mb-4">Tarefa semanal 02 - 06/abril até 10/abril</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    
  </div>
</div>
</section>

<section>
<div class="tarefas-img">
<div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana2/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana2/img7.jpg" alt=""></a>
    </div>
  </div>
</div>
</div>
</section>






<section class="ftco-section ftco-no-pt ftc-no-pb">
<div class="container">
  <div class="text-center">
      <h1 class="mb-4">Tarefa semanal 01 - 30/março até 03/abril</h1>
      <h3 class=mb-4> Ensino Fundamental</h3>
      <h3 class=mb-4> 4º ano (9 anos)</h3>
      <p>Clique nas imagens para baixar a tarefa</p>
    </div>
 </div>

 <div class="tarefas-img">
 <div class="container">
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img1.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img1.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img2.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img2.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img3.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img3.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img4.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img4.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img5.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img5.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img6.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img6.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img7.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img7.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img8.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img8.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img9.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img9.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img10.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img10.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img11.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img11.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img12.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img12.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img13.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img13.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img14.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img14.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img15.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img15.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img16.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img16.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img17.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img17.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img18.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img18.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img19.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img19.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img20.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img20.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img21.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img21.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img22.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img22.jpg" alt=""></a>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img19.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img19.jpg" alt=""></a>
    </div>
    <div class="col-sm">
      <a href="./images/infantil9/semana1/img20.jpg" download><img class="img-fluid"
          src="./images/infantil9/semana1/img20.jpg" alt=""></a>
    </div>
  </div>
 </div>
 </div>
</section>`;