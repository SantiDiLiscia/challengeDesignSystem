import {useState} from 'react';
import Button from "../components/Button";
import exampleIcon1 from "../assets/icons/exampleIcon1.svg";
import CardOriginal from "../components/Card";
import styled from "styled-components";

const Card = styled(CardOriginal)`
  align-items: center;
  margin: 20px auto;
`;

const ButtonContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`; 

function ButtonSample() {
  const [enabled, setEnabled] = useState(false);

  return(
    <Card>
      <h1>Button Sample</h1>
      <ButtonContainer>
        <Button>Default</Button>
        <Button heirarchy="primary">Primary</Button>
        <Button heirarchy="secondary">Secondary</Button>
        <Button heirarchy="terciary">Terciary</Button>
        <Button heirarchy="primary" iconLeft={exampleIcon1}>Left Icon</Button>
        <Button heirarchy="primary" iconRight={exampleIcon1}>Right Icon</Button>
        <Button heirarchy="primary" iconLeft={exampleIcon1} iconRight={exampleIcon1}>Left and Right Icon</Button>
        <Button disabled={true} >Disabled button</Button>
        <Button heirarchy="primary" size="small" >Small button</Button>
        <Button onClick={() => {setEnabled(preVal => !preVal)}}> Toggle Enabled</Button>
        <Button heirarchy="primary" disabled={enabled} size="small" onClick={() => {console.log('I\'m enabled')}}> Primary Small button</Button>
      </ButtonContainer> 
    </Card>
  )
};

export default ButtonSample;
