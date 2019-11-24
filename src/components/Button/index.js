import  React from 'react';
import Button from 'antd/es/button';


const ButtonDefault = ({text : text, ...rest}) =>(
    <Button {...rest} style={{position:'initial'}}type="primary">{text}</Button>
)

export default ButtonDefault;