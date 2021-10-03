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
