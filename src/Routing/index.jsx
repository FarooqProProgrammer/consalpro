import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Pages } from '../pages'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {Pages?.map((item, index) => {
                    return (
                        <Route key={index} path={item.route} element={item.element} />
                    )
                })}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing
