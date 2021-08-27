# Medly Components

[![Lint, Build, Test](https://github.com/medly/medly-components/workflows/Lint,%20Build,%20Test/badge.svg)](https://github.com/medly/medly-components/actions?query=workflow%3A%22Lint%2C+Build%2C+Test%22)
[![react version](https://img.shields.io/badge/react-%5E16.8.6-blue)](https://www.npmjs.org/package/react)
[![styled-components version](https://img.shields.io/badge/styled--components-%5E4.2.0-blue)](https://www.npmjs.com/package/styled-components)
[![typescript version](https://img.shields.io/badge/types-TypeScript-blue?style=flat-square)](https://www.npmjs.com/package/typescript)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![GitHub](https://img.shields.io/github/license/medly/medly-components)](https://github.com/medly/medly-components/blob/master/LICENSE)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

![Medly Components](https://medlycomponents.com/medly-components.png)

Themable React components with various configurations to match your needs.

## Documentation

You can checkout the storybook of the components [here](https://medly.github.io/medly-components).

## Table of Contents

- 🚀 [Getting Started](#getting-started)
- 📦 [Packages](#packages)
  - 🧩 [Core](#core)
  - ℹ [Icons](#icons)
  - 🌀 [Loaders](#loaders)
  - ⧉ [Layout](#layout)
  - 📝 [Forms](#forms)
  - 🏞 [Theme](#theme)
  - 🛠 [Utils](#utils)
- 📜 [Built With](#built-with)
- 👨‍💻 [Contributing](#CONTRIBUTING)
- 📝 [Npm Scripts](#npm-scripts)

## Getting Started

```properties
npx create-react-app medly-components-demo --template typescript
cd medly-components-demo
yarn add styled-components @types/styled-components
yarn add @medly-components/theme @medly-components/utils @medly-components/icons @medly-components/core @medly-components/layout @medly-components/loaders @medly-components/forms
```

Replace content of `index.tsx` with the following:

```tsx
import { defaultTheme } from '@medly-components/theme';
import { CssBaseline } from '@medly-components/core';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
 <ThemeProvider theme={defaultTheme}>
  <CssBaseline />
  <App />
 </ThemeProvider>,
 document.getElementById('root')
);
```

Replace the content in `App.tsx` with the following:

```tsx
import React from 'react';
import { Button } from '@medly-components/core';

const App: React.FC = () => <Button variant="solid">Click me!</Button>;

export default App;
```

If you are using any static property of any component like `Modal.Header`, you have to add `"strictNullChecks": false` in your `tsconfig.json` file.

## Packages

Library consists of five packages:

### [Core](https://github.com/medly/medly-components/tree/master/packages/core)

Core package consists of components almost all basic React components like Avatar, Button, Input, List, Modal etc.

### [Icons](https://github.com/medly/medly-components/tree/master/packages/icons)

Icons package consists of the most commonly used SVG icons exposed as React components.

### [Loaders](https://github.com/medly/medly-components/tree/master/packages/loaders)

A few simple svg loaders exposed as React components.

### [Layout](https://github.com/medly/medly-components/tree/master/packages/layout)

Layout package consists of components that help in creating a page layout using side panels and nav items, which are exposed as React components.

### [Forms](https://github.com/medly/medly-components/tree/master/packages/forms)

Using this package you can create dynamic forms using simple json.

### [Theme](https://github.com/medly/medly-components/tree/master/packages/theme)

Themes let you define how a component should be styled across website. This can be done individually for particular types of components. E.g. all icons should be solid or can be done for the whole website, like color theme for all type of components across website should be orange.

### [Utils](https://github.com/medly/medly-components/tree/master/packages/utils)

Utils package consists of the most commonly used functionalities and components. E.g. [String Helper](https://github.com/medly/medly-components/tree/master/packages/utils/src/stringHelpers.ts) has functions to convert a string to camelCase, case insensitive string comparison etc.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/medly/medly-components/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Built With

🔥 [react](https://github.com/facebook/react)

💅 [styled-components](https://www.styled-components.com)

⛑ [typescript](https://www.typescriptlang.org/)

📚 [storybook](https://storybook.js.org/)

💥 [babel](https://babeljs.io/)

🐐 [react-testing-library](https://github.com/kentcdodds/react-testing-library)

## npm scripts

- `yarn build` to build components
- `yarn commit` to commit with conventional-commit approach
- `yarn lint:css` to run the css lint
- `yarn lint:ts` to run the ts lint
- `yarn lint` to run both css & ts lint
- `yarn test` to run tests and type check
- `yarn test:update` to update snapshots
- `yarn test:watch` to watch tests
- `yarn type-check` to run tsc to check types
- `yarn test:jest` to run test only
- `yarn storybook` to run storybook for live reloading your components
- `yarn release` to publish the latest version to npm
