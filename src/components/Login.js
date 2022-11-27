import styled from "styled-components"
import { useState } from "react"
import { useAuth } from "../providers/auth"
import axios from "axios"
import { BASE_URL } from "../providers/urls.js"
import { ThreeDots } from "react-loader-spinner"


export default function Login(props) {
    const { setUser } = useAuth()
    const [isDisable, setIsDisabled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({ email: "", password: "" })
    const { setNavbarStatus } = props

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function logIn(e) {
        e.preventDefault()
        setIsLoading(true)

        const body = { ...form }
        setIsDisabled(!isDisable)

        const promise = axios.post(`${BASE_URL}/auth/sign-in`, body)
        promise.then(res => {
            setUser(res.data)
            setIsLoading(false)
            setNavbarStatus("loged")
        })

        promise.catch(err => {
            alert(err.response.data.message)
            setIsLoading(false)
        })
    }

    function changeNavBar() {
        setNavbarStatus("register")
    }

    return !isLoading ? (
        <Form onSubmit={logIn}>
            <input name="email" value={form.email} onChange={handleForm} placeholder="Email" type="email" />
            <input name="password" value={form.password} onChange={handleForm} placeholder="Password" type="password" />
            <button type="submit">Log in</button>
            <p onClick={changeNavBar}>Don't have registration?</p>
        </Form>
    ) : (
        <Form>
            <input disabled name="email" value={form.email} placeholder="Email" type="email" />
            <input disabled name="password" value={form.password} placeholder="Password" type="password" />
            <button className="load-button">
                <ThreeDots className="loader" color="#FFFFFF" height={50} width={50} />
            </button>
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
        margin-right: 10px;
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

    button {
        width: 60px;
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