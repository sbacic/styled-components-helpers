# Styled-components-helpers

Helpers for handling props in styled-components.

## Installation

`yarn add @sbacic/styled-components-helpers`

## Example

```JSX
    const Element = styled.div`
      color: black;

      ${has('attribute', 'alternate')`
        color: blue;
      `}

      ${is('status', 'warning')`
        border: 1px solid red;
      `}
    `;

    <Element alternate status="warning" />
```

## API

`has(attribute: string)`

Apply styles if the component has `attribute`.

`is(attribute: string, value: unknown)`

Apply styles if the component's `attribute` matches `value`.

`any(attributes: string[])`

Apply styles if the component has at least one attribute from `attributes`.

`all(attributes: string[])`

Apply styles only if the component has all the listed `attributes`.

`none(attributes: string[])`

Apply styles only if the component has one of the listed `attributes`.