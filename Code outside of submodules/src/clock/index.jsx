import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'

const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timerID = setInterval(() => setDate(new Date()), 1000)
        return () => clearInterval(timerID)
    })

    return <H2>{date.toLocaleTimeString()}</H2> 
}

const H2 = Styled.h2`
 display: inline-block;
 float: right;
 text-align: center;
 margin-right: 3%;
`

export default Clock