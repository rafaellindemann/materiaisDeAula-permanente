// script.js

// Array para armazenar os produtos
let products = [];

// Variável para armazenar o ID do produto em edição
let editId = null;

// Função para adicionar ou atualizar um produto
function addOrUpdateProduct(name, price) {
    if (editId) {
        // Atualizar produto existente
        products = products.map(product =>
            product.id === editId ? { id: product.id, name, price } : product
        );
        editId = null;
    } else {
        // Adicionar um novo produto
        const id = Date.now();
        const product = { id, name, price };
        products.push(product);
    }

    // Atualizar a exibição dos produtos
    displayProducts();
}

// Função para remover um produto pelo ID
function removeProduct(id) {
    products = products.filter(product => product.id !== id);
    displayProducts();
}

// Função para editar um produto pelo ID
function editProduct(id) {
    const product = products.find(product => product.id === id);
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;
    editId = id;
}

// Função para exibir os produtos na tela
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${product.name}, Preço: ${product.price}`;

        const buttons = document.createElement('div');
        buttons.classList.add('buttons');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeProduct(product.id);

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('edit-button');
        editButton.onclick = () => editProduct(product.id);

        buttons.appendChild(editButton);
        buttons.appendChild(removeButton);
        li.appendChild(buttons);
        productList.appendChild(li);
    });
}

// Adicionar evento ao formulário para adicionar ou atualizar produtos
document.getElementById('product-form').addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);

    addOrUpdateProduct(name, price);

    event.target.reset();
});
