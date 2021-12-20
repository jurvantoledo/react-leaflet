import React, { useReducer } from 'react'

export default function ScrollButton(props) {    
    const scrollToBottom = () =>{ 
        window.scrollTo({ 
          top: props.myRef.current.offsetTop, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour 
             in place of 'smooth' */
        }); 
      }; 

    return (
        <>
            <button onClick={scrollToBottom}>
                ^
            </button>
        </>
    )
}