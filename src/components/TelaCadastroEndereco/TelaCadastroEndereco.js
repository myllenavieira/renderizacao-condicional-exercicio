import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastroEndereco(props) {
    return (
        <FormContainer>
            <h1>Cadastro Endereço</h1>
            <Form>
                <StyledLabel htmlFor="descricao">
                    Endereço:
                    <Input id="endereco" />
                </StyledLabel>
                <StyledLabel htmlFor="numero">
                    Número da residência:
                    <Input id="numero" />
                </StyledLabel>
                <StyledLabel htmlFor="telefone">
                    Telefone:
                    <Input id="telefone" />
                </StyledLabel>
                <StyledLabel htmlFor="descricao">
                    Complemento:
                    <Input id="descricao" />
                </StyledLabel>
                <SendButton onClick={() => props.mudarTela(3)}>Cadastrar</SendButton>
                <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo um cadastro</BackToLoginButton>
            </Form>
        </FormContainer>
    );
}

export default TelaCadastroEndereco;
