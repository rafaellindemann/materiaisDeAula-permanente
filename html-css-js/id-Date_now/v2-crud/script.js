// script.js

// Array para armazenar os produtos
let products = [];

// Função para adicionar um produto
function addProduct(name, price) {
    // Gerar um ID único usando Date.now()
    const id = Date.now();

    // Criar o objeto produto
    const product = { id, name, price };

    // Adicionar o produto ao array
    products.push(product);

    // Atualizar a exibição dos produtos
    displayProducts();
}

// Função para remover um produto pelo ID
function removeProduct(id) {
    // Filtrar o array para remover o produto com o ID fornecido
    products = products.filter(product => product.id !== id);

    // Atualizar a exibição dos produtos
    displayProducts();
}

// Função para exibir os produtos na tela
function displayProducts() {
    // Selecionar o elemento da lista de produtos
    const productList = document.getElementById('product-list');

    // Limpar a lista
    productList.innerHTML = '';

    // Adicionar cada produto à lista
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${product.name}, Preço: ${product.price}`;

        // Adicionar um botão de remoção para cada produto
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeProduct(product.id);

        li.appendChild(removeButton);
        productList.appendChild(li);
    });
}

// Adicionar evento ao formulário para adicionar produtos
document.getElementById('product-form').addEventListener('submit', event => {
    event.preventDefault();

    // Obter os valores do formulário
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);

    // Adicionar o produto
    addProduct(name, price);

    // Limpar o formulário
    event.target.reset();
});
