import styled from 'styled-components';
const Login = () => {
    return(
        <ButtonWrapper>
            Login
        </ButtonWrapper>

    )
}
const ButtonWrapper = styled.button`
font-size:${16/16}rem;
padding:4px 12px;
border-radius:2px;
background-color:#50c878;
border:2px solid transparent;
color:white;
&:hover {
    background-color:hsl(90, 100%, 27%);
}
font-family:'Source Sans Pro',sans-serif;
`
export default Login;