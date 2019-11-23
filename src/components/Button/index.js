import  React from 'react';
import Button from 'react-bootstrap/Button'


const ButtonDefault = ({text : text, ...rest}) =>(
    <Button {...rest} variant="dark">{text}</Button>
)

export default ButtonDefault;