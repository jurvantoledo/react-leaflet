import React from "react"
import SecretgardenMap from "../../Components/Map/Map"
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';

export default function HomePage() {
    return (
        <div className="container">
            <SecretgardenMap />
            Home
            <Icon>arrow_downward</Icon>
        </div>
    )
}