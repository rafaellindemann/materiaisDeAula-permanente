const btnAdicionar = document.getElementById('btnAdicionar');
const modal = document.getElementById('modalCliente');
const fecharModal = document.getElementById('fecharModal');
const form = document.getElementById('formCliente');
const tabela = document.getElementById('tabelaClientes').querySelector('tbody');
const tituloModal = document.getElementById('tituloModal');
const indiceEdicao = document.getElementById('indiceEdicao');

function obterClientes() {
  return JSON.parse(localStorage.getItem('clientes')) || [];
}

function salvarClientes(clientes) {
  localStorage.setItem('clientes', JSON.stringify(clientes));
}

function renderTabela() {
  const clientes = obterClientes();
  tabela.innerHTML = '';
  clientes.forEach((cliente, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${cliente.nome}</td>
      <td>${cliente.email}</td>
      <td>${cliente.telefone}</td>
      <td>${cliente.cpf}</td>
      <td>
        <button class="editar" onclick="editarCliente(${index})">Editar</button>
        <button class="deletar" onclick="deletarCliente(${index})">Deletar</button>
      </td>
    `;
    tabela.appendChild(tr);
  });
}

btnAdicionar.onclick = () => {
  form.reset();
  indiceEdicao.value = '';
  tituloModal.textContent = 'Novo Cliente';
  modal.classList.remove('hidden');
};

fecharModal.onclick = () => {
  modal.classList.add('hidden');
};

form.onsubmit = (e) => {
  e.preventDefault();
  const clientes = obterClientes();
  const cliente = {
    nome: form.nome.value,
    email: form.email.value,
    telefone: form.telefone.value,
    cpf: form.cpf.value
  };
  const index = indiceEdicao.value;
  if (index === '') {
    clientes.push(cliente);
  } else {
    clientes[index] = cliente;
  }
  salvarClientes(clientes);
  modal.classList.add('hidden');
  renderTabela();
};

function editarCliente(index) {
  const clientes = obterClientes();
  const cliente = clientes[index];
  form.nome.value = cliente.nome;
  form.email.value = cliente.email;
  form.telefone.value = cliente.telefone;
  form.cpf.value = cliente.cpf;
  indiceEdicao.value = index;
  tituloModal.textContent = 'Editar Cliente';
  modal.classList.remove('hidden');
}

function deletarCliente(index) {
  if (confirm('Tem certeza que deseja deletar este cliente?')) {
    const clientes = obterClientes();
    clientes.splice(index, 1);
    salvarClientes(clientes);
    renderTabela();
  }
}

renderTabela();
