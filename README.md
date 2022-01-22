# thalles-victor-ToggleColorInStyledComponentsWhitProps
<h1> Como criar e passar propriedades do componente Para A estilização no CSS do Styled-Components </h1>
Esse repositório mostra como passar propriedades de um componente para sua estilização no CSS com typescript.

<h2>index.tsx</h2>

```typescript
import React, {useState} from 'react';
import { Text } from 'react-native';

import { Container, Input } from './styles';

const CustomIputText: React.FC = () => {
  const [focus, setFocus] = useState(false)

  return(
    <Container>
      <Text>Custom Text Input</Text>
      <Input
        isFocus = {focus}

        onFocus ={
          () => { setFocus(true) }
        }
        onBlur ={
          () => { setFocus(false) }
        }
      />
    </Container>
  );
}

export default CustomIputText;
```

<h2>styles.ts</h2>

```typescript

import styled from 'styled-components/native';

interface Props {
    isFocus: boolean
}

export const Container = styled.View`
  
`;

export const Input = styled.TextInput<Props>`
    width: 300px;
    height: 35px;
    border-radius: 5px;
    padding-left: 8px;
    background-color: #2D2D2D2D;
    border: ${ (props: Props) => props.isFocus ? 'blue' : 'red'};
`;

```
