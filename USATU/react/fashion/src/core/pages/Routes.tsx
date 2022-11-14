import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Main } from "./main/Main"
import React from "react"

export const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>
            </Routes>
        </BrowserRouter>
    )
}