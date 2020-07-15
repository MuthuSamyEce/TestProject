import React from 'react'
import { useAccordionToggle } from 'react-bootstrap'


const CustomAcordianToggle =({ children, eventKey }) =>{

  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <span onClick={decoratedOnClick}>
      {children}
    </span>
  )

}


export default CustomAcordianToggle
