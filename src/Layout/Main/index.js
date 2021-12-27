import React from 'react'

export  default function Main(props) {
    return (
        <div className={`section-${props.name}`}>
            <div className='container'>
                <div className='content'>{props.children}</div>
            </div>
        </div>
    )
}