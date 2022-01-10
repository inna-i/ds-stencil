# tutorial-tips



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type     | Default     |
| ------------- | -------------- | ----------- | -------- | ----------- |
| `acceptLabel` | `accept-label` |             | `string` | `undefined` |
| `actions`     | `actions`      |             | `any`    | `undefined` |
| `backLabel`   | `back-label`   |             | `string` | `undefined` |
| `description` | `description`  |             | `string` | `undefined` |
| `heading`     | `heading`      |             | `string` | `undefined` |
| `position`    | `position`     |             | `string` | `undefined` |
| `subHeading`  | `sub-heading`  |             | `string` | `undefined` |


## Events

| Event    | Description                 | Type               |
| -------- | --------------------------- | ------------------ |
| `accept` |                             | `CustomEvent<any>` |
| `back`   | The back action to redirect | `CustomEvent<any>` |


## Dependencies

### Depends on

- [link-component](../link-component)
- [button-component](../button-component)

### Graph
```mermaid
graph TD;
  tips-component --> link-component
  tips-component --> button-component
  style tips-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
