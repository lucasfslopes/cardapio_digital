let itens = [];

document.addEventListener('DOMContentLoaded', async () => {
    await carregarItens();
})

async function carregarItens() {
    try{
        const res = await fetch('dados.json'); 
        itens = await res.json();

        console.log("Dados:", itens);
        mostrarItens();

    } catch(e) {
        console.error("Erro no JSON:", e);
    }
}

function mostrarItens() {
    const content = document.getElementById('sectionCategoria1');

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
            </div>
        `;

        content.appendChild(cardItem);      
    })

    
}