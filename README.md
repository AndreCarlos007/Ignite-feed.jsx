# Ignite Feed - Aplicativo de Feedback com React.js

Ignite Feed é um projeto desenvolvido para aprimorar conceitos fundamentais do **React.js**, explorando manipulação de estado, imutabilidade, hooks e interatividade do usuário. A aplicação permite a publicação de postagens com interação dinâmica através de comentários e sistema de "aplausos".

## 🚀 Tecnologias Utilizadas

- **React.js** - Biblioteca JavaScript para criação de interfaces dinâmicas.
- **JavaScript (ES6+)** - Utilização de recursos modernos da linguagem.
- **React Hooks** - Gerenciamento de estado e efeitos colaterais.
- **CSS Modules** - Modularização e escopo de estilos para componentes.

## 📌 Funcionalidades

- ✅ Adicionar comentários em postagens.
- 🗑️ Excluir comentários.
- 👏 Sistema de "aplausos" para interações.
- 📱 Interface responsiva e estilizada com **CSS Modules**.

## 📂 Estrutura do Projeto

```
├── src/
|   ├── assets/  # Imagens e recursos visuais
│   ├── components/
│   │   ├── Avatar.jsx
│   │   ├── Avatar.module.css
│   │   ├── Comment.jsx
│   │   ├── Comment.module.css
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   ├── Post.jsx
│   │   ├── Post.module.css
│   │   ├── Sidebar.jsx
│   │   ├── Sidebar.module.css
│   ├── App.jsx
│   ├── App.module.css
│   ├── main.jsx
```

## 🔧 Instalação e Execução

Para rodar este projeto localmente, siga os passos abaixo:

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/seu-usuario/Ignite-feed.jsx.git
   cd ignite-feed
   ```

2. **Instale as dependências:**

   ```bash
   npm install  # ou yarn install
   ```

3. **Execute o projeto:**

   ```bash
   npm run dev  # ou yarn dev
   ```

4. **Acesse a aplicação no navegador:**

   - Abra **[http://localhost:5173](http://localhost:5173)**.

---

## 📖 Explicação do Projeto

O **Ignite Feed** é uma aplicação que simula um feed social, onde os usuários podem visualizar postagens, interagir através de comentários e expressar apreciação usando o sistema de "aplausos".

### 🏗️ Como Funciona?

1. **Postagens**: Criadas dinamicamente, cada uma representando um conteúdo compartilhado.
2. **Comentários**: Usuários podem adicionar e excluir comentários sobre cada postagem.
3. **Aplausos**: Um sistema de curtidas onde é possível demonstrar engajamento com a publicação.
4. **Estilização**: Utiliza **CSS Modules** para manter o escopo dos estilos organizados por componentes.
5. **Gerenciamento de Estado**: React Hooks como `useState` e `useEffect` são utilizados para manipular interações.

Este projeto é um excelente exercício para praticar conceitos fundamentais do React.js e criar interfaces interativas com manipulação de estado e estilização modularizada. 🚀

