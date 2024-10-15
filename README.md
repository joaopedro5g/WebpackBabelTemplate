---

# Phaser + TypeScript + Webpack + Babel Boilerplate 🎮

Esse repositório é um **boilerplate** para ajudar você a começar a desenvolver jogos com [Phaser 3](https://phaser.io/phaser3), [TypeScript](https://www.typescriptlang.org/), [Webpack](https://webpack.js.org/) e [Babel](https://babeljs.io/). Tudo pronto para criar a base do seu próximo jogo! 🚀

## 📋 O que você encontra aqui?

- **Phaser 3**: A engine de jogos 2D.
- **TypeScript**: Para tipagem estática, mais segurança e inteligência no código.
- **Webpack**: Para empacotar o código e lidar com as dependências de forma otimizada.
- **Babel**: Para garantir compatibilidade do código com diferentes navegadores.

## 🛠️ Pré-requisitos

Antes de começar, você precisa ter as seguintes ferramentas instaladas no seu ambiente:

- [Node.js](https://nodejs.org/en/) (recomendado: versão 16+)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

## 📦 Como Usar

### 1. Clone o repositório

```bash
git clone github.com/joaopedro5g/WebpackBabelTemplate
cd WebpackBabelTemplate
```

### 2. Instale as dependências

Se você utiliza Yarn:

```bash
yarn install
```

Ou com npm:

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
yarn start
```

Ou:

```bash
npm start
```

Isso iniciará um servidor local e abrirá o jogo no navegador, acessível em `http://localhost:8080/` (ou outra porta disponível).

## 🔨 Scripts Disponíveis

- **`yarn dev` ou `npm run dev`**: Inicia o servidor de desenvolvimento com recarga automática.
- **`yarn build` ou `npm run build`**: Compila o projeto para produção na pasta `dist`.

## 🚀 Estrutura do Boilerplate

O boilerplate foi configurado com uma estrutura básica para começar o desenvolvimento de jogos:

```
/
├── public/                # Arquivos estáticos
│   └── index.html         # Arquivo HTML principal
├── src/                   # Seu código TypeScript
│   └── index.ts           # Arquivo de inicialização do Phaser
├── .babelrc               # Configuração do Babel
├── webpack.config.js      # Configuração do Webpack
├── tsconfig.json          # Configurações do TypeScript
└── package.json           # Dependências e scripts do projeto
```

## ✨ Customização

Este template é altamente customizável! Você pode adicionar novas cenas, importar assets, e ajustar as configurações do Webpack, TypeScript ou Babel conforme as necessidades do seu projeto de jogo.

## 📚 Tecnologias

- **Phaser 3**: O motor de jogos 2D usado neste template.
- **TypeScript**: Código com tipagem estática para maior segurança.
- **Webpack**: Para empacotamento e otimização do jogo.
- **Babel**: Compatibiliza o código com diferentes versões de navegadores.

## 💬 Contribuições

Se você tiver sugestões de melhorias ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request!

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---
