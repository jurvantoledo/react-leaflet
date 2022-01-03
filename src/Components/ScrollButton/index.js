import React from 'react'
import { Button, Icon } from '@material-ui/core';
import './style.scss'

export default function ScrollButton(props) {
    return (
        <>
            <Button className="scroll-dwn-btn" style={{ position: 'absolute', bottom: '0' }} variant="text" onClick={props.scroll}>
                <Icon className='scroll-dwn-icon'>arrow_downward</Icon>
            </Button>
        </>
    )
}