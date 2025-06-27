# Sistema de Portfólios

Este projeto contém um sistema de portfólios compartilhado entre dois desenvolvedores:

- **Murilo Luiz**: Portfolio desenvolvido em Laravel
- **Fernando Kotinda**: Portfolio desenvolvido em React

## Estrutura do Projeto

```
Portfolio/
??? src/                    # Aplicação React principal (página inicial)
??? murilo/                 # Portfolio do Murilo (Laravel)
??? fernando/               # Portfolio do Fernando (React)
??? public/                 # Arquivos públicos
```

## Como Funciona

- `www.portfolio.com.br/` - Página inicial para escolher o portfolio
- `www.portfolio.com.br/murilo` - Portfolio do Murilo (Laravel)
- `www.portfolio.com.br/fernando` - Portfolio do Fernando (React)

## Desenvolvimento

### Pré-requisitos

- Node.js
- PHP 8.1+
- Composer

### Instalação

1. Instale as dependências do React:
```bash
npm install
```

2. Instale as dependências do Laravel:
```bash
cd murilo
composer install
```

3. Configure o ambiente Laravel:
```bash
cd murilo
cp .env.example .env
php artisan key:generate
```

### Executando o Projeto

Para executar ambos os servidores simultaneamente:
```bash
npm run dev:all
```

Isso irá iniciar:
- React na porta 5173 (http://localhost:5173)
- Laravel na porta 8000 (http://localhost:8000)

O proxy do Vite redirecionará automaticamente as requisições `/murilo` para o servidor Laravel.

### Scripts Disponíveis

- `npm run dev` - Inicia apenas o servidor React
- `npm run dev:laravel` - Inicia apenas o servidor Laravel
- `npm run dev:all` - Inicia ambos os servidores
- `npm run build` - Build de produção do React

## Produção

Para produção, você precisará:

1. Configurar um servidor web (Apache/Nginx)
2. Configurar o proxy reverso para redirecionar `/murilo` para o servidor Laravel
3. Fazer o build do React: `npm run build`

### Exemplo de configuração Apache (.htaccess)

O arquivo `.htaccess` na pasta `public/` já está configurado para redirecionar as rotas `/murilo` para o servidor Laravel.

## Tecnologias Utilizadas

- **Frontend Principal**: React + TypeScript + Vite + Tailwind CSS
- **Portfolio Murilo**: Laravel + PHP
- **Portfolio Fernando**: React + TypeScript

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
