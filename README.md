# Medly Components

![Medly Components](https://medlycomponents.com/medly-components.png)

[![Lint, Build, Test](https://github.com/medly/medly-components/workflows/Lint,%20Build,%20Test/badge.svg)](https://github.com/medly/medly-components/actions?query=workflow%3A%22Lint%2C+Build%2C+Test%22)
[![react version](https://img.shields.io/badge/react-%5E16.8.6-blue)](https://www.npmjs.org/package/react)
[![styled-components version](https://img.shields.io/badge/styled--components-%5E4.2.0-blue)](https://www.npmjs.com/package/styled-components)
[![typescript version](https://img.shields.io/badge/types-TypeScript-blue?style=flat-square)](https://www.npmjs.com/package/typescript)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![GitHub](https://img.shields.io/github/license/medly/medly-components)](https://github.com/medly/medly-components/blob/master/LICENSE)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Themable React components with various configurations to match your needs.

## Documentation

To view a detailed description of the components in storybook click [here](https://medly.github.io/medly-components).

## Table of Contents

- 🚀 [Getting started](#getting-started)
- 📦 [Packages](#packages)
  - 🧩 [Core](#core)
  - 📝 [Forms](#forms)
  - ℹ [Icons](#icons)
  - ⧉ [Layout](#layout)
  - 🌀 [Loaders](#loaders)
  - 📄 [Markdown](#markdown)
  - 🏞 [Theme](#theme)
  - 🛠 [Utils](#utils)
- 📜 [Built with](#built-with)
- 👨‍💻 [Contributing](#CONTRIBUTING)
- 📝 [NPM scripts](#npm-scripts)

## Getting Started

```properties
npx create-react-app medly-components-demo --template typescript
cd medly-components-demo
yarn add styled-components @types/styled-components
yarn add @medly-components/theme @medly-components/utils @medly-components/icons @medly-components/core @medly-components/layout @medly-components/loaders @medly-components/forms
```

Replace the `index.tsx` content with the following:

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

Replace the `App.tsx` content with the following:

```tsx
import React from 'react';
import { Button } from '@medly-components/core';

const App = () => <Button variant="solid">Click me!</Button>;

export default App;
```

If you are using a static property of any component like `Modal.Header`, you must add `"strictNullChecks": false` in your `tsconfig.json` file.

## Packages

The component library consists of the following packages:

### [Core](https://github.com/medly/medly-components/tree/master/packages/core)

The Core package consists of almost all the basic React components like Avatar, Button, Input, List, Modal, etc.

### [Forms](https://github.com/medly/medly-components/tree/master/packages/forms)

The Form package lets you create dynamic forms using simple JSON.

### [Icons](https://github.com/medly/medly-components/tree/master/packages/icons)

The Icon package consists of the most commonly used SVG icons exposed as React components.

### [Layout](https://github.com/medly/medly-components/tree/master/packages/layout)

The Layout package consists of components that help in creating a page layout using side panels and nav items, which are exposed as React components.

### [Loaders](https://github.com/medly/medly-components/tree/master/packages/loaders)

The Loaders package consists of a few simple SVG loaders exposed as React components.

### [Markdown](https://github.com/medly/medly-components/tree/master/packages/markdown)

The Markdown package consists of a basic syntx guide which helps you format your content.

### [Theme](https://github.com/medly/medly-components/tree/master/packages/theme)

The Theme package defines the overall look, feel, and style of your website. Each component can be defined individually. For example, all icons of a website can be made solid, the color of all the components can be made orange, etc.

### [Utils](https://github.com/medly/medly-components/tree/master/packages/utils)

The Utils package consists of the most commonly used functionalities and components. E.g. [String Helper](https://github.com/medly/medly-components/tree/master/packages/utils/src/stringHelpers.ts) has functions to convert a string to camelCase, case insensitive string comparison etc.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/medly/medly-components/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us the pull requests.

## Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/medly/medly-components/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=medly/medly-components" />
</a>

## Built With

🔥 [react](https://github.com/facebook/react)

💅 [styled-components](https://www.styled-components.com)

⛑ [typescript](https://www.typescriptlang.org/)

📚 [storybook](https://storybook.js.org/)

💥 [babel](https://babeljs.io/)

🐐 [react-testing-library](https://github.com/kentcdodds/react-testing-library)

## NPM Scripts

Please find below a list of commands to execute various tasks:

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
