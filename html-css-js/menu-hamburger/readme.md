# README - Menu Toggle com JavaScript

Exemplo simples de menu interativo usando apenas:

* HTML
* CSS
* JavaScript puro

Inspirado na postagem original:

[Postagem original no Instagram](https://www.instagram.com/p/DYFx6dAlZ__/?img_index=1&igsh=MTJ3dXNmZ2N4MG12aw%3D%3D&utm_source=chatgpt.com)

---

# Como funciona?

O menu começa escondido através do CSS:

```css
#menu {
  display: none;
}
```

Quando o botão é clicado, o JavaScript adiciona ou remove a classe `active`:

```js
menu.classList.toggle("active");
```

A classe `active` altera o `display` do menu:

```css
#menu.active {
  display: flex;
}
```

---

# Fluxo do funcionamento

## 1. O JavaScript seleciona os elementos

```js
const btn = document.querySelector("#btn");
const menu = document.querySelector("#menu");
```

* `btn` → botão do menu
* `menu` → lista `<ul>`

---

## 2. O botão recebe um evento de clique

```js
btn.addEventListener("click", () => {

});
```

Sempre que o botão for clicado, a função será executada.

---

## 3. A classe é alternada

```js
menu.classList.toggle("active");
```

O método `toggle()`:

* adiciona a classe se ela não existir
* remove a classe se ela já existir

---

# Resultado

| Estado       | Resultado      |
| ------------ | -------------- |
| Sem `active` | menu escondido |
| Com `active` | menu aparece   |

---

# Estrutura usada

## HTML

```html
<nav>
  <button id="btn">☰</button>

  <ul id="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Sobre</a></li>
    <li><a href="#">Cursos</a></li>
  </ul>
</nav>
```

---

## CSS

```css
#menu {
  display: none;
}

#menu.active {
  display: flex;
}
```

---

## JavaScript

```js
btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
```

---

# Conceitos praticados

* `querySelector`
* `addEventListener`
* `click`
* `classList`
* `toggle`
* manipulação de classes
* interação entre HTML, CSS e JS
