import React from 'react'

export default function Section(props) {
    return (
        <section className={`${props.name}-section-${props.index}`}>
            <div className='container'>
                <div className='content'>{props.children}</div>
            </div>
        </section>
    )
}