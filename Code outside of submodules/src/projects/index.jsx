import React from 'react'
import Styled from 'styled-components'

const MyProjects = () => {
    return (
        <Div >
            <H2>My projects</H2>
            <DivProjectCard>
                <Img src={require("../content/dany-style.png")} alt="Error with loadin imgage/"></Img>
                <H3><a href="https://dany-style.com">Dany-style</a></H3>
                <h4>Dany-style is static website for hairderssing studio. This is my first web deployed website.</h4>
            </DivProjectCard>
            <DivProjectCard>
                <Img src={require("../content/learning-react.png")} alt="Error with loadin imgage/"></Img>
                <H3><a href={"http://localhost:3000/"}>Learn React</a></H3>
                <h4>Learning React is my second project made with react. Morea bout the technologies used you can find on website.</h4>
            </DivProjectCard>
        </Div>

    )
}

const Div = Styled.div`
    display:inline-block;
    position: absolute;
    margin-left: 10%;
    width: 40%;
`

const H2 = Styled.h2`
    text-align: center;
`

const DivProjectCard = Styled.div`
    border: 2px solid black;
    text-align: center;
    margin-top:4%;
    >* {
    margin: 2.5%;
}
`

const Img = Styled.img`
    width: 30%;
    height: 60px;
`

const H3 = Styled.h3`
&:hover{
    transform: scale(1.3);
}
`

export default MyProjects