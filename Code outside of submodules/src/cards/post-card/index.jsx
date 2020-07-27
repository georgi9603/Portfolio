import React from 'react'
import Styled from 'styled-components'

const PostCard = () => {

    return (
      <div style={{textAlign: "center"}}>
        <Div>
          <Img src="https://www.robinwieruch.de/static/dbb6b6b256b589aad81a3ed374590f4d/2b1a3/banner.jpg" width="256" height="200" alt="Error with loading img"></Img>
          <H2><a href="https://reactjs.org/">React</a></H2>
          <P>A JavaScript library for building user interfaces</P>
        </Div>
        <Div>
          <Img src="https://miro.medium.com/max/1200/1*kjZAT2HyYLv5gKT9SMBAHA.png" width="256" height="200" alt="Error with loading img"></Img>
          <H2><a href="https://www.npmjs.com/package/react-router-dom">React Router Dom</a></H2>
          <P>DOM bindings for React Router.</P>
        </Div> 
        <Div>
          <Img src="data:image/png;base64,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" width="256" height="200" alt="Error with loading img"></Img>
          <H2><a href="https://www.styled-components.com/">Styled Components</a></H2>
          <P>The best bits of ES6 and CSS to style your apps <span role="img" aria-label="styled-comonents-logo">💅</span>.</P>
        </Div>
        <Div>
          <Img src="data:image/png;base64,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" width="256" height="200" alt="Error with loading img"></Img>
          <H2><a href="https://www.npmjs.com/package/axios">Axios</a></H2>
          <P>Promise based HTTP client for the browser and node.js</P>
        </Div>
        <Div>
          <Img src="https://pbs.twimg.com/profile_images/972606960842387457/CdsTvILr_400x400.jpg" width="256" height="200" alt="Error with loading img"></Img>
          <H2><a href="https://reacttraining.com/">React Training</a></H2>
          <P>Learn React by building key features of a realisitic app.</P>
        </Div>
        <Div>
          <Img src="https://cms-assets.tutsplus.com/uploads/users/831/posts/25911/preview_image/webpack-tuts.jpg" width="256" height="200" alt="Error with loading img"></Img>
          <H2><a href="https://webpack.js.org/">Webpack</a></H2>
          <P>Webpack is a module bundler.</P>
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
margin-top: 1%; 
border-radius: 7%;
`;

const P = Styled.p`
width: 400px;
`
const H2 = Styled.h2`
&:hover {
  transform: scale(1.2);
}
`

const Img = Styled.img`
margin-top: 2%;
border-radius: 5%;
`

export default PostCard