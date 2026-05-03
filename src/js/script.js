let itens = [];
let categorias = [];


document.addEventListener('DOMContentLoaded', async () => {
    await carregarItens();
})

async function carregarItens() {
    try{
        const res = await fetch('dados.json'); 
        itens = await res.json();

        categorias = [...new Set(itens.map(item => item.categoria))];

        //console.log("Dados:", categorias);
        renderMain();

    } catch(e) {
        console.error("Erro no JSON:", e);
    }
}

function renderMain() {
    const mainContent = document.getElementById('main');
    const botoes = document.getElementById('botoesCategoria');
    

    categorias.forEach(categoria_name => {
        const btn = document.createElement('button');
        const newSection = document.createElement('section');
        const textoCategoria = document.createElement('p');

        btn.innerText = categoria_name;

        textoCategoria.innerText = categoria_name;
        textoCategoria.classList.add('titleSection');

        newSection.classList.add('containerCategorias');
        newSection.id = 'sectionCategoria_' + categoria_name;
        newSection.appendChild(textoCategoria);

        botoes.appendChild(btn);
        mainContent.appendChild(newSection);

        const sectionsContent = document.getElementById('sectionCategoria_' + categoria_name);

        const filtrado = itens.filter(p => p.categoria === categoria_name);
        
        filtrado.forEach(p =>{
            const cardItem = document.createElement('div');
            cardItem.classList.add('cardItens');

            cardItem.innerHTML = `
                <div class="colunaInfoItem">
                    
                    <h2>${p.nome_produto.toUpperCase()}</h2>
                    <p>${p.descricao}</p>
                    <div>${p.tag[0].toUpperCase()}</div>
                    <h3>R$ ${p.preco.toFixed(2)}</h3>
                </div>

                <div class="colunaFoto">
                    <img class="fotoItemCard" src="${p.link_foto}" alt="imagem ilustrativa">
                    <p>Cod: ${p.cod}</p>
                </div>
            `;

            sectionsContent.appendChild(cardItem);      
        })


    })

}

function render() {
    const content = document.getElementById('sectionCategoria1');
    const botoes = document.getElementById('botoesCategoria');

    categorias.forEach(p => {
        const btn = document.createElement('button');

        btn.innerText = p;

        botoes.appendChild(btn);
    })

    itens.forEach(p =>{
        const cardItem = document.createElement('div');
        cardItem.classList.add('cardItens');

        cardItem.innerHTML = `
            <div class="colunaInfoItem">
                
                <h2>${p.nome_produto.toUpperCase()}</h2>
                <p>${p.descricao}</p>
                <div>${p.tag[0].toUpperCase()}</div>
                <h3>R$ ${p.preco.toFixed(2)}</h3>
            </div>

            <div class="colunaFoto">
                <img class="fotoItemCard" src="${p.link_foto}" alt="imagem ilustrativa">
                <p>Cod: ${p.cod}</p>
            </div>
        `;

        content.appendChild(cardItem);      
    })
}