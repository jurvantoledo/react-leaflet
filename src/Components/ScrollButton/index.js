import React from 'react'
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import './style.scss'

export default function ScrollButton(props) {  
    return (
        <>
        <Button className="scroll-dwn-btn" style={{ position: 'absolute', bottom: '0' }} variant="text" onClick={props.scrollToBottom}>
                <Icon className='scroll-dwn-icon'>arrow_downward</Icon>
        </Button>
        </>
    )
}