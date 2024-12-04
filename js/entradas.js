// cria os vetores para armazenar os dados do backend
var ids_pratos=[];
var pratos = [];
var desc_pratos = [];
var precos_pratos = [];
var fotos_pratos = [];
var categorias_pratos = [];


//cria o evento que será executado qdo carrega a pagina
window.onload=()=>{
    pesquisaCardapio();
};
//cria  a função pesquisa cardapio, que traz os dados do back
function pesquisaCardapio(){
    //faz a requisição ao backend
    fetch('http://localhost:8000/cardapio/')
    //transforma a resposta em json
    .then(response=>response.json())
    //manipula os dados retornados do backend
    .then(data=>{
        //pega o grid dos produtos
        const div_pratos = 
        document.getElementById('card-position');
        //estrutura de repetição para alimentar os vetores
        for(var i=0;i<data.length;i++){
            //push adiciona um item no final do vetor
            if(data[i].categoria=='Entradas'){
            ids_pratos.push(data[i].id);
            pratos.push(data[i].nome);
            desc_pratos.push(data[i].descricao);
            precos_pratos.push(data[i].preco);
            fotos_pratos.push(data[i].foto);
            categorias_pratos.push(data[i].categoria);
            
        }
    }
   // alert(ids_pratos.length);
        //estrutura de repetição para montar os cards na tela
        for(var j=0;j<ids_pratos.length;j++){
            //variaveis para cada prato
            var id = ids_pratos[j];
            var prato = pratos[j];
            var descricao = desc_pratos[j];
            var preco = precos_pratos[j];
            var foto = fotos_pratos[j];
            var categoria = categorias_pratos[j];
           
            //cria os cards na tela
            var card_prato = document.createElement('div');
            card_prato.setAttribute('class', 'card');
            //card_prato.setAttribute('href', 'pratos.html?id='+id);
            //card_prato.setAttribute('target', '__blank');
            card_prato.innerHTML = '<img src="image/comidas/entradas/'+foto+'"alt="">'+
            '<div class="--linha">'+
            '<div class="--text">'+
                '<p class="titulo">'+prato+'</p>'+
                '<p class="subtitulo">'+descricao+' </p>'+
            '</div>'+
            '<div class="--preco-button">'+
                '<p class="titulo">R$'+preco+'</p>'+
                '<a href="teste.html"><button class="btn">Adicionar a sacola </button></a>'+
                '<button class="btn" onclick="adicionarAoCarrinho('+prato+', '+preco+')">Adicionar a sacola</button>'+
            '</div>'+
            '</div>'+
        '</div>';
            //adicionar o card no grid
            div_pratos.appendChild(card_prato);

        }
    })
    .catch(error=>{
        alert("Erro: "+error);
    });
}