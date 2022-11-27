import { useEffect, useState } from "react";
import styled from "styled-components";
import Login from "./Login.js";
import Logo from "./Logo.js";
import Register from "./Register.js";

export default function NavBar() {
    const [navbarStatus, setNavbarStatus] = useState("register")

    useEffect(() => {
        getNavBarStatus()
    }, [navbarStatus])

    function getNavBarStatus() {
        if (navbarStatus === "unloged") {
            return <Login setNavbarStatus={setNavbarStatus} />
        } else if (navbarStatus === "register") {
            return <Register setNavbarStatus={setNavbarStatus} />
        }
    }

    return (
        <PageContainer>
            <Logo />
            {getNavBarStatus()}
        </PageContainer>
    )
}

const PageContainer = styled.div`
    background-color: #DCDCDC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px 10px 20px;
`