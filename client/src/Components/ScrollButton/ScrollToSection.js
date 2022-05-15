// Scrolls to the section the ref is called on
const ScrollToSection = (props) => { 
        window.scrollTo({ 
            top: props.myRef.current.offsetTop, 
            behavior: 'smooth'
        });
  };

export default ScrollToSection;