# Demo de inputs

Além das cobertas no exemplo, talvez possam ser relevantes também:

1. **Input de senha (`password`)**: Semelhante ao input de texto, mas oculta o valor digitado.
   ```jsx
   <input type="password" name="senha" value={dinossauro.senha} onChange={handleInputChange} />
   ```

2. **Input de arquivo (`file`)**: Permite o upload de arquivos, como imagens ou documentos. Você poderia usá-lo para permitir que o usuário anexasse uma imagem do dinossauro, por exemplo.
   ```jsx
   <input type="file" name="imagem" onChange={handleInputChange} />
   ```

3. **Input de URL (`url`)**: Para capturar endereços de sites. Talvez você queira registrar um link para um estudo relacionado ao dinossauro.
   ```jsx
   <input type="url" name="estudoURL" value={dinossauro.estudoURL} onChange={handleInputChange} />
   ```

4. **Input de telefone (`tel`)**: Específico para números de telefone, podendo adicionar validações específicas para formatos de telefone.
   ```jsx
   <input type="tel" name="telefoneDescobridor" value={dinossauro.telefoneDescobridor} onChange={handleInputChange} />
   ```

5. **Input de busca (`search`)**: Similar ao texto, mas indicado para campos de busca. Pode ser útil se o app crescer e houver necessidade de pesquisar dinossauros cadastrados.
   ```jsx
   <input type="search" name="pesquisa" value={dinossauro.pesquisa} onChange={handleInputChange} />
   ```

