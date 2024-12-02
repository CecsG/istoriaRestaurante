// cria os vetores para armazenar os dados do backend
var almoco=[];
var bebidas = [];
var  = [];
var precos_pratos = [];
var fotos_pratos = [];
var categorias_pratos = [];
var promocoes_pratos = [];

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
        document.getElementById('grid');
        //estrutura de repetição para alimentar os vetores
        for(var i=0;i<data.length;i++){
            //push adiciona um item no final do vetor
            ids_pratos.push(data[i].id);
            pratos.push(data[i].prato);
            desc_pratos.push(data[i].descricao);
            precos_pratos.push(data[i].preco);
            fotos_pratos.push(data[i].foto);
            categorias_pratos.push(data[i].categoria);
            promocoes_pratos.push(data[i].promocao);
        }
        //estrutura de repetição para montar os cards na tela
        for(var j=0;j<ids_pratos.length;j++){
            //variaveis para cada prato
            var id = ids_pratos[j];
            var prato = pratos[j];
            var descricao = desc_pratos[j];
            var preco = precos_pratos[j];
            var foto = fotos_pratos[j];
            var categoria = categorias_pratos[j];
            var promocao = promocoes_pratos[j];
            //cria os cards na tela
            var card_prato = document.createElement('a');
            card_prato.setAttribute('class', 'product-item');
            card_prato.setAttribute('href', 'pratos.html?id='+id);
            card_prato.setAttribute('target', '__blank');
            card_prato.innerHTML = '<div class="photo">'+
                '<img src="./assets/'+foto+'" alt=""></div>'+
                '<div class="info">'+
                '<div class="product-category">'+categoria+'</div>'+
                '<div class="product-name">'+prato+'</div>'+
                '<div class="product-price">R$ '+preco+'</div>'+
                '</div>';
            //adicionar o card no grid
            div_pratos.appendChild(card_prato);

        }
    })
    .catch(error=>{
        alert("Erro: "+error);
    });
}