const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 5000;

// Configuração do multer para armazenar os arquivos na pasta 'uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Rota para lidar com o upload de imagem
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'Erro no upload!' });

  // Responde com uma mensagem de sucesso e o caminho do arquivo
  res.json({ message: 'Upload realizado com sucesso!', filePath: req.file.path });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em <http://localhost>:${PORT}`);
});
