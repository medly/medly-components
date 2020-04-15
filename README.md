# Medly Components

[![](https://github.com/medly/medly-components/workflows/Test/badge.svg)](https://github.com/medly/medly-components/actions?query=workflow%3ATest)
[![react version](https://img.shields.io/badge/react-%5E16.8.6-blue)](https://www.npmjs.org/package/react)
[![styled-components version](https://img.shields.io/badge/styled--components-%5E4.2.0-blue)](https://www.npmjs.com/package/styled-components)
[![typescript version](https://img.shields.io/badge/types-TypeScript-blue?style=flat-square)](https://www.npmjs.com/package/typescript)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Medly components provides numerous themable react components, each with multiple varitaions of sizes, colors, position etc. You can checkout the storybook of the components [here](https://medly.github.io/medly-components).

## Table of Contents

-   🚀[Getting Started](#getting-started)
-   📦[Packages](#packages)
    -   🛠[Core](#core)
    -   ℹ[Icons](#icons)
    -   ⧉[Layout](#layout)
    -   🏞[Theme](#theme)
    -   🛠[Utils](#utils)
-   📜[Built With](#built-with)
-   📝[Npm Scripts](#npm-scripts)

## Getting Started

```sh
npx create-react-app medly-components-demo --typescript
cd medly-components-demo
npm i styled-components @types/react @types/react-dom @types/styled-components
npm i @medly-components/theme @medly-components/utils @medly-components/icons @medly-components/core @medly-components/layout @medly-components/loaders
```

Replace content of `index.tsx` with the following:

```tsx
import { defaultTheme } from '@medly-components/theme';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
```

Replace content in `App.tsx` with the following:

```tsx
import React from 'react';
import { Button } from '@medly-components/core';

const App: React.SFC = () => <Button variant="solid">Click me!</Button>;

export default App;
```

## Packages

Library consists of five packages:

### [Core](https://github.com/medly/medly-components/tree/master/packages/core)

Core package consits of components almost all basic react components like Avatar, Button, Input, List, Modal etc.

### [Icons](https://github.com/medly/medly-components/tree/master/packages/icons)

Icons package consists of most commonly used svg icons for add, delete, clearfile, clipboard etc exposed as react components.

### [Layout](https://github.com/medly/medly-components/tree/master/packages/layout)

Layout package consists of components that help in creating a page layout using side panels and nav items, which are exposed as react components.

### [Theme](https://github.com/medly/medly-components/tree/master/packages/theme)

Themes lets you define how a component should be styled across website. This can be done individually for particular type of components, eg all icons should be solid or can be done for the whole website, like color theme for all type of components across website should be orange.

### [Utils](https://github.com/medly/medly-components/tree/master/packages/utils)

Utils package consists of most commonly used functionalities or components. Eg [String Helper](https://github.com/medly/medly-components/tree/master/packages/utils/src/stringHelpers.ts) has functions to convert a string to camelCase, case insensitive string comparison etc

## Built With

🔥 [react](https://github.com/facebook/react)

💅 [styled-components](https://www.styled-components.com)

⛑ [typescript](https://www.typescriptlang.org/)

📚 [storybook](https://storybook.js.org/)

💥 [babel](https://babeljs.io/)

🐐 [react-testing-library](https://github.com/kentcdodds/react-testing-library)

## npm scripts

-   `yarn build` to build components
-   `yarn commit` to commit with conventional-commit approach
-   `yarn lint:css` to run the css lint
-   `yarn lint:ts` to run the ts lint
-   `yarn lint` to run both css & ts lint
-   `yarn test` to run tests and type check
-   `yarn test:update` to upgrate snapshots
-   `yarn test:watch` to watch tests
-   `yarn type-check` to run tsc to check types
-   `yarn test:jest` to run test only
-   `yarn storybook` to run storybook for live reloading your components
-   `yarn release` to version your components
