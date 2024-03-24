// Função para abrir o modal
function openModal() {
    document.getElementById('registerModal').showModal();
  }
  
  // Função para fechar o modal
  function closeModal() {
    document.getElementById('registerModal').close();
  }
  
  // Event listener para abrir o modal quando o botão for clicado
  document.getElementById('openModalBtn').addEventListener('click', openModal);
  