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
    itens.forEach()
}