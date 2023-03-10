import {useState} from "react";

import {
    Button,
    ButtonContainer,
    Card, 
    CardInput,
    FooterContainer,
    FooterSection,
    FooterText,
    InputsContainer,
    LoginContainer,
    Logo,
    LogoContainer,
    Subtitle,
    SubtitleContainer,
    Title,
    TopFooterSection,
 } from "./styles";

function Login({toggleTheme}) {
    const [formData, setFormData] = useState({
        name: "",
        pass: "",
    })

    function handleChange(e) {
        const {target} = e;
        const {name, value} = target;

        setFormData(currentData => ({
            ...currentData,
            [name]: value
        }));
    };

    function handleDelete(inputName) {
        setFormData(cD => ({...cD, [inputName]: ""}))
    };

    function handleSubmit(){
        console.log(formData);
    };
    
    return(
        <LoginContainer>
            <LogoContainer>
                <Logo onClick={toggleTheme} />
                <SubtitleContainer>
                    <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
                    <Subtitle>Maecenas aliquam in urna pellentesque euismod ultricies neque velit.</Subtitle>
                </SubtitleContainer >
            </LogoContainer>

            <Card>
                    <Title>Ingresar</Title>
                    <InputsContainer>
                        <CardInput
                            helperText="Como aparece en el documento"
                            inputStyle="box"
                            labelName="Name"
                            name="name"
                            onChange={handleChange}
                            onDelete={handleDelete}
                            placeholder="Ej. Andrea"
                            value={formData.name}
                        />
                        <CardInput
                            errorMsg="Error"
                            inputStyle="box"
                            inputType="password"
                            labelName="Password"
                            name="pass"
                            onChange={handleChange}
                            onDelete={handleDelete}
                            startingStatus="error"
                            value={formData.pass}
                        />
                    </InputsContainer>
                    <ButtonContainer>
                        <Button heirarchy="primary" onClick={handleSubmit}>Entrar</Button>
                        <Button heirarchy="secondary">Recuperar clave</Button>
                    </ButtonContainer>
            </Card>
            <FooterContainer>
                <TopFooterSection>
                    <FooterText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam in urna pellentesque euismod ultricies neque velit.
                    </FooterText>
                    <FooterText>
                        Maecenas aliquam in urna pellentesque euismod ultricies neque velit.
                    </FooterText>
                </TopFooterSection>
                <FooterSection>
                    <FooterText>
                        Maecenas aliquam in urna pellentesque euismod ultricies neque velit.
                    </FooterText>
                </FooterSection>
            </FooterContainer>
        </LoginContainer>
    )
}

export default Login;