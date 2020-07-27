import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const NavigationList = () => {

    return (
        <Ul>
            <Li><Link to="/">Home</Link></Li>
            <Li><Link to="/portfolio">Portfolio</Link></Li>
            <Li><Link to="/makegood">Make Good</Link></Li>
            <Li><Link to="/contactMe">Contact me</Link></Li>
        </Ul>
    )
}

const Ul = Styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  
    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
  
    li a:hover {
        background-color: #111;
        transform: scale(1.2);
    }
`
const Li = Styled.li`
    float: left;
`

export default NavigationList