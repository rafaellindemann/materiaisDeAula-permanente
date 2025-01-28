import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Função para lidar com a seleção de arquivo
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Cria uma URL de pré-visualização para o arquivo
    setPreviewUrl(URL.createObjectURL(file));
  };

  // Função para enviar o arquivo ao backend
  const handleUpload = async () => {
    if (!selectedFile) return alert('Selecione um arquivo primeiro!');

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('<http://localhost:5000/upload>', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert(response.data.message); // Alerta de sucesso
    } catch (error) {
      console.error('Erro ao enviar o arquivo:', error);
      alert('Falha no upload');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} accept="image/*" />
      {previewUrl && <img src={previewUrl} alt="Preview" style={{ maxWidth: '200px', marginTop: '10px' }} />}
      <button onClick={handleUpload}>Enviar Imagem</button>
    </div>
  );
};

export default ImageUpload;
