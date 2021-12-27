import React from 'react'

export default function Section(props) {
    return (
        <section className={`section-${props.name}-page-${props.index}`}>
            <div className='container'>
                <div className='content'>{props.children}</div>
            </div>
        </section>
    )
}