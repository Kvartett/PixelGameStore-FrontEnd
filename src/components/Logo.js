import logo from "../assets/images/logo.png"
import styled from "styled-components"

export default function Logo() {
    return (
        <LogoContainer>
            <LogoSize src={logo} />
            <h1>Pixel Game Store</h1>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    h1 {
        font-size: 22px;
        font-weight: 600;
    }
`

const LogoSize = styled.img`
    width: 28px;
    height: 28px;
    margin-right: 10px;
`