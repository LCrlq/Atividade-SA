function buscarMoto() {
    fetch("http://10.92.199.53:3000/carros")
        .then((res) => res.json())
        .then((data) => {
 
            //Div onde os carros vão aparecer
            let divContainerCarro = document.getElementById("containerCarros")
 
            data.forEach(carro => {
                //Criando card com classes para estilização
                let card = document.createElement("div")
                card.className = 'product-card'

                card.innerHTML = `
                    <img src="${carro.imagem}" alt="${carro.nome}" />
                    <div class="product-info">
                        <h5 class="product-name">${carro.nome}</h5>
                        <h5 class="product-price">${carro.preco}</h5>
                    </div>
                    <button class="buy-btn">Comprar</button>
                    `

                divContainerCarro.append(card)
            });
        })
}
 
function buscarCarro() {
    fetch("http://10.92.199.53:3000/motos")
        .then((res) => res.json())
        .then((data) => {
 
            //Div onde as motos vão aparecer
            let divContainerMoto = document.getElementById("containerMotos")
 
            data.forEach(moto => {
                //Criando card com classes para estilização
                let card = document.createElement("div")
                card.className = 'product-card'

                card.innerHTML = `
                    <img src="${moto.imagem}" alt="${moto.nome}" />
                    <div class="product-info">
                        <h5 class="product-name">${moto.nome}</h5>
                        <h5 class="product-price">${moto.preco}</h5>
                    </div>
                    <button class="buy-btn">Comprar</button>
                    `

                divContainerMoto.append(card)
            });
        })
}
 
function buscarVendedores() {
    fetch("http://10.92.199.53:3000/vendedores")
        .then((res) => res.json())
        .then((data) => {
 
            //Div onde os vendedores vão aparecer
            let divContainerVendedor = document.getElementById("containerVendedores")
 
            data.forEach(vendedor => {
                //Criando card com classe de vendedor
                let card = document.createElement("div")
                card.className = 'vendor-card'

                card.innerHTML = `
                    <img src="${vendedor.imagem}" alt="${vendedor.nome}" />
                    <h5 class="vendor-name">${vendedor.nome}</h5>
                    `

                divContainerVendedor.append(card)
            });
        })
};
 
buscarCarro();
buscarMoto();
buscarVendedores();
 