import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { BASE_URL } from "../providers/urls"

export default function Register(props) {
    const [form, setForm] = useState({ email: "", username: "", password: "" })
    const { setNavbarStatus } = props

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function sendRegister(e) {
        e.preventDefault()

        const body = { ...form }

        axios.post(`${BASE_URL}/auth/sign-up`, body)
            .then(res => {
                setNavbarStatus("unloged")
            })
            .catch(err => alert(err.response.data.message))
    }

    function changeNavBar() {
        setNavbarStatus("unloged")
    }

    return (
        <Form onSubmit={sendRegister}>
            <input name="email" value={form.email} onChange={handleForm} placeholder="Email" type="email" required />
            <input name="username" value={form.name} onChange={handleForm} placeholder="Username" type="text" required />
            <input name="password" value={form.password} onChange={handleForm} placeholder="Password" type="password" required />
            <button type="submit">Create Account</button>
            <p onClick={changeNavBar}>Already have an account?</p>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    input {
        background-color: #FFFFFF;
        height: 25px;
        margin-right: 7px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 10px;
        box-sizing: border-box;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 15px;
        line-height: 25px;
        color: #DBDBDB;
    }

    input:nth-child(1) {
        width: 200px;
    }

    input:nth-child(2) {
        width: 150px;
    }

    input:nth-child(3) {
        width: 150px;
    }

    button {
        width: 120px;
        height: 25px;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        box-sizing: border-box;
    }

    .load-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        display: flexbox;
        width: 80px;
        height: 25px;
        font-size: 11px;
        margin-left: 5px;
        text-align: center;
    }
`