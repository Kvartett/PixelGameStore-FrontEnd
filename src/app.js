import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyle.js"
import React from "react"
import HomePage from "./pages/HomePage/HomePage"


export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}