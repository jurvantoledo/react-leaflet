import React, { forwardRef } from 'react'

const Section = forwardRef((props, ref) => (
        <section 
            className={`${props.name}-section-${props.index}`} 
            style={props.style} 
            ref={ref}
        >
            <div className='container'>
                <div className='content'>{props.children}</div>
            </div>
        </section>
));

export default Section;