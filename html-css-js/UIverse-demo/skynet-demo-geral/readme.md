Criei a página em canvas com a demo completa.

Sobre o CSS:
Para **aula/demo pequena**, tudo no mesmo `.html` é melhor: fácil de copiar, testar e estudar.

Para **projeto maior**, eu separaria assim:

```txt
index.html
css/
  base.css
  layout.css
  buttons.css
  inputs.css
  cards.css
  loaders.css
  forms.css
  utilities.css
js/
  main.js
```

Ou, se virar projeto componentizado:

```txt
components/
  Button/
    button.css
  Card/
    card.css
  Input/
    input.css
```

Como essa é uma vitrine de componentes, deixei em **arquivo único** para facilitar a didática. Usei categorias próximas às do Uiverse: botões, inputs, cards, toggles, checkboxes, loaders, forms, tooltips e patterns. O Uiverse se apresenta como uma biblioteca de elementos open-source e organiza componentes por categorias como loading UI, button effects, cards, forms/inputs e tooltips/patterns.
