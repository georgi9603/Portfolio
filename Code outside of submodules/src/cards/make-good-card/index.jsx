import React from 'react'
import Styled from 'styled-components'

const MakeGood = () => {

    return (
      <div style={{textAlign: "center"}} >
        <Div>
          <Img src="https://scontent.fsof9-1.fna.fbcdn.net/v/t1.0-9/14900518_1169964089758142_7331144380852231532_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=zfWtOjW5j9MAX-RFeCJ&_nc_ht=scontent.fsof9-1.fna&oh=3e48fd9a7ebf4dc83eea70fea1d26b76&oe=5EC006B4" width="256" height="200" alt="Error with loading img"></Img>
          <H2><a href="https://www.facebook.com/petsisters.bg/">Pet sisters</a></H2>
          <P>A organisation with the sole aim of helping homeless animals</P>
        </Div>
        <Div>
          <Img src="https://scontent.fsof9-1.fna.fbcdn.net/v/t1.0-9/59733390_2216952441685679_8889315768404017152_n.jpg?_nc_cat=106&_nc_ohc=36OFteZqkWYAQmF2Ofwx81m5Oj5aY4XOTpq9vIgMCIRtvJ-p316l8NsNA&_nc_ht=scontent.fsof9-1.fna&oh=677ce6996e42f9768e9abaf26b825689&oe=5EADECBB" width="256" height="200" alt="Error with loading img"></Img>
          <H2><a href="https://www.podarivreme.org/">Give time</a></H2>
          <P>We gather people who are willing to give some of their free time to others.</P>
        </Div> 
        <Div>
          <Img src="https://dmsbg.com/wp-content/themes/dms/temp-files/img-01-420x400.png" width="256" height="200" alt="Error with loading img"></Img>
          <H2><a href="https://dmsbg.com/">Pick a campaign</a></H2>
          <P>With the power of one SMS you can donate to different causes.</P>
        </Div>
      </div>
    )
}

const Div = Styled.div`
text-align: center;
border: 2px solid;
display: inline-block;
float: center;
margin-left:5%;
margin-top: 4%; 
border-radius: 7%;
`

const H2 = Styled.h2`
&:hover {
  transform: scale(1.2);
}
`

const P = Styled.p`
width: 400px;
`
const Img = Styled.img`
margin-top: 2%;
border-radius: 7%;
`

export default MakeGood