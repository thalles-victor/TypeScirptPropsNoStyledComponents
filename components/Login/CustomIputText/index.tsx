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