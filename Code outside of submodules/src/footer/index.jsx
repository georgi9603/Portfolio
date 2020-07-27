import React, { Fragment } from 'react'
import Styled from 'styled-components'
import { FacebookSquare } from 'styled-icons/fa-brands/FacebookSquare'
import { Linkedin } from 'styled-icons/fa-brands/Linkedin'
import { GithubSquare } from 'styled-icons/fa-brands/GithubSquare'
import { UpArrowSquare } from 'styled-icons/boxicons-solid/UpArrowSquare'

const footer = () => {

    function returnToTop() {
        window.scrollTo(0, 0);
    }
    
    return (
        <Fragment>
            <Div>
                <A href="https://github.com/georgi9603" ><GithubIcon /><H3>GitHub</H3></A>
                <A href="https://www.facebook.com/profile.php?id=100007481837630"><BlueFacebookIcon /><H3>Facebook</H3></A>
                <A href="https://www.linkedin.com/in/georgi-karabojilov-4b3b37141/"><BlueLinkedIn /><H3>LinkedIn</H3></A>
                <A href="" onClick={returnToTop}><UpArrowCircleIcon /><H3>To the top</H3></A>
            </Div>
        </Fragment>
    );
};

const Div = Styled.div`

    width:90%;
    margin-left:5%;
    margin-right:5%
    margin-top: 4%;
    background-color: papayawhip;
    border: 1px solid: papayawhip;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    border-top: 5px outset #333;
`

const A = Styled.a`
> * {
    &:hover {
        transform: scale(1.2);
    }
}
`

const GithubIcon = Styled(GithubSquare)`
    margin-left:10%;
    display:inline-block;
    width: 3%;
    color: #686868;
`

const BlueFacebookIcon = Styled(FacebookSquare)`
    margin-left:1%;
    display:inline-block;
    width: 3%;
    color: blue;
`

const BlueLinkedIn = Styled(Linkedin)`
    margin-left:1%;
    width: 3%;
    color: blue;
`

const UpArrowCircleIcon = Styled(UpArrowSquare)`
    margin-bottom: 2.3%;
    margin-left:40%;
    width: 4%;
    color: #686868;
`

const H3 = Styled.h3`
    margin-top:5%;
    margin-left:0.7%;
    display: inline-block;
    > * {
        &:hover {
            transform: scale(1.2);
        }
    }
`

export default footer