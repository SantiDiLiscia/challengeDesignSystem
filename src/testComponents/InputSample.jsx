import Input from "../components/Input";

import CardOriginal from "../components/Card";
import styled from "styled-components";

const Card = styled(CardOriginal)`
  display: flex; 
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  margin: 20px auto;
  justify-content: center;
`; 


function InputSample() {

  return(
    <>
    <Card>
        <h1>Input Sample</h1>
        <Input
          labelName="Nombre"
          inputStyle="box"
          tip="Tip"
          helperText="Error"
          pre="Pre"
          post="Post"
          maxLength={100}
          charLimit={10}
        />

        <Input
          labelName="Nombre"
          inputStyle="box"
          tip="Nombre"
          pre="Pre"
          post="Post"
          maxLength={100}
          charLimit={10}
        />

        <Input
          labelName="Complete example"
          inputStyle="box"
          startingStatus="complete"
        />

        <Input
          labelName="Disabled example"
          inputStyle="box"
          disabled
        />

        <Input
          labelName="Read Only example"
          inputStyle="box"
          readOnly
        /> 

        <Input
          labelName="Error example"
          inputStyle="box"
          startingStatus="error"
        />

        <Input
          labelName="Sucess example"
          inputStyle="box"
          startingStatus="success"
        />

        <Input
          labelName="Pass"
          inputType="password"
        />
    </Card>
    </>
  )
};

export default InputSample;
