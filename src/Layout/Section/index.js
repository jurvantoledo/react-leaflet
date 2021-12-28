import React, { forwardRef } from 'react'

// Why forwardRef?
// We create a React ref by calling createRef and assign it to a ref variable.
// We pass our ref down to <ComponentName ref={ref}> by specifying it as a JSX attribute.
// React passes the ref to the (props, ref) => ... function inside forwardRef as a second argument.
// We forward this ref argument down to <ComponentName ref={ref}> by specifying it as a JSX attribute.
// When the ref is attached, ref.current will point to the <Component> DOM node.


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