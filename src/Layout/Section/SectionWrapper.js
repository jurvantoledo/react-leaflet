import React, { Children, cloneElement } from "react";

const SectionWrapper = ({ children, name }) => {
  return (
    Children.map(children, (child, index) => 
    cloneElement(child, {
      index: index + 1,
      total: Children.count(children),
      name: name
    })
    )
  );
}

export default SectionWrapper;
