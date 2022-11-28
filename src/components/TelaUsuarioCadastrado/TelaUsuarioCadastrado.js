import { Div, Titulo,LoginButton } from "./styled";

function TelaUsuarioCadastrado (props){
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <LoginButton onClick={ ()=>props.mudarTela(1) }>Logout</LoginButton>
        </Div>
    )
}

export default TelaUsuarioCadastrado;