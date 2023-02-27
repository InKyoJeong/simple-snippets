# Simple Front Snippets

<p align="center">
  <img src="https://user-images.githubusercontent.com/48676844/221220456-c06a61ba-04d7-478f-8521-43d6664b1fdb.png" width='180px' height='180px' alt="snippet" >
</p>

<p align="center">
<img src="https://img.shields.io/visual-studio-marketplace/v/InKyoJeong.simple-front-snippets" />
  <h4 align="center">Simple Front-end snippets for JS, React</h4>
  <br />
</p>

## Install

- Visit [VSCode MarketPlace](https://marketplace.visualstudio.com/items?itemName=InKyoJeong.simple-front-snippets) and Install
  - or Click Extensions(`Shift+Command+X`) and Search `simple-front-snippets`

<br>

## Usage

### Utils

| `cl` | `console.log()`            |
| ---- | :------------------------- |
| `af` | `const $1 = ($2) => {$3};` |

<br>

### ES6 Class

- `sc`

```js
class App {
  constructor() {}
}

export default App;
```

<br>

### React

> Create simple component without `import React`

- `sfc`

```jsx
function Component() {
  return <div></div>;
}

export default Component;
```

<br>

- `safc`

```jsx
const Component = () => {
  return <div></div>;
};

export default Component;
```

<br>

### React Typescript

> Create simple component with `interface`

<br>

- `stfc`

```tsx
interface ComponentProps {}

function Component({}: ComponentProps) {
  return <div></div>;
}

export default Component;
```

<br>

- `stafc`

```tsx
interface ComponentProps {}

const Component = ({}: ComponentProps) => {
  return <div></div>;
};

export default Component;
```

<br>

### ReactNative

> Create simple typescript RN Component

- `strnc`

```tsx
import { StyleSheet, View } from "react-native";

interface ComponentProps {}

const Component = ({}: ComponentProps) => {
  return <View></View>;
};

const styles = StyleSheet.create({});

export default Component;
```
