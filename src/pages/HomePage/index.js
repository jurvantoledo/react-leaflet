import React from "react"
import SecretgardenMap from "../../Components/Map/Map"

export default function HomePage() {
    return (
        <div className="container">
            <SecretgardenMap />
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
    )
}