import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyles"
import React from "react"
import LoginPage from "./pages/LoginPage/LoginPage"


export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}