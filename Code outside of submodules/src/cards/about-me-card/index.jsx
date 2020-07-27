import React, { useState } from 'react'
import Styled from 'styled-components'
import axiosCalls from '../../AjaxCalls/index'
import { FacebookSquare } from 'styled-icons/fa-brands/FacebookSquare'
import { Linkedin } from 'styled-icons/fa-brands/Linkedin'
import { GithubSquare } from 'styled-icons/fa-brands/GithubSquare'

const AboutMeCard = () => {
    const [userData, setUserData] = useState('')

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await axiosCalls.getUser();
            setUserData(response.data);
        }

        fetchData();
    }, []);

    return (
        <Div>
            <Img src={userData.avatar_url} width="256" height="200" alt="Error with loading img"></Img>
            <H2>Georgi Karabozhilov</H2>
            <A href="https://github.com/georgi9603" ><GithubIcon /><h3>GitHub</h3></A>
            <A href="https://www.facebook.com/profile.php?id=100007481837630"><BlueFacebookIcon /><h3>Facebook</h3></A>
            <A href="https://www.linkedin.com/in/georgi-karabojilov-4b3b37141/"><BlueLinkedIn /><h3>LinkedIn</h3></A>
            <P className="changeColor">I'm a junior developer willing to learn new frameworks, technics and patterns. Currently working in SBTech as junior second level support. My responsibles are to fix FE issues. When bug is reported to find how it can be fixed and escalate it to relevant team(FE, BE, BI or team responsible about sport feed.</P>
        </Div>
    )
}

const H2 = Styled.h2`
display: inline-block;
width: 100%;
`

const Div = Styled.div`
border-radius: 30px;
text-align: center;
border: 2px solid;
display: inline-block;
margin-left:5%;
margin-top: 2%; 
width: 30%;
`;

const Img = Styled.img`
border: 2px solid;
border-radius: 3%;
margin-top: 2%;
width: 80%;
height: 80%;
`

const GithubIcon = Styled(GithubSquare)`
display:inline-block;
width: 10%;
color: #686868;
`

const BlueFacebookIcon = Styled(FacebookSquare)`
display:inline-block;
width: 10%;
color: blue;
`
const BlueLinkedIn = Styled(Linkedin)`
width: 10%;
color: blue;
`
const A = Styled.a`
> * {
    &:hover {
        transform: scale(1.2);
    }
}
`
const P = Styled.p`
width: 100%;
font-size: 18px;
`
export default AboutMeCard