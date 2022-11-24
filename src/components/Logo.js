import logo from "../assets/images/logo.png"
import styled from "styled-components"

export default function Logo() {
    return (
        <LogoSize src={logo} />
    )
}

const LogoSize = styled.img`
    width: 25px;
    height: 25px;
`