# Simple Snippets

## Usage

#### ES6 Class

- `sc`

```js
class App {
  constructor() {}
}

export default App;
```

<br>

#### React

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

#### React Typescript

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
