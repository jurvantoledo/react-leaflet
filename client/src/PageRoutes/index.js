import React from 'react'
import { Routes, Route } from 'react-router'
import ComingSoonPage from '../pages/ComingSoonPage'
import HomePage from '../pages/HomePage'
import TestPage from '../pages/TestPage'

export default function PageRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<ComingSoonPage />}/>
            <Route exact path='/home' element={<HomePage />} />
            <Route exact path='/test' element={<TestPage />} />
        </Routes>
    )
}