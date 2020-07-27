import React, { Fragment } from 'react'
import Styled from 'styled-components'
import Clock from '../clock'
import NavigationList from '../navigationList'

const header = () => {
    return (
        <Div>
            <Fragment>
                <H1>G.K Learning React</H1>
                <Clock />
                <NavigationList />
            </Fragment>
        </Div>
    )
}

const Div = Styled.div`
    width:90%;
    margin-left:5%;
    margin-right:5%
    border: 5px outset papayawhip;
    &:hover{
    background-color: papayawhip;
`

const H1 = Styled.h1`
    display: inline-block;
    margin-left:2%;
    &:hover {
        transform: scale(1.2);
    }
`

export default header