import React, { useState, useRef } from 'react'
import Styled from 'styled-components'

const ContactMe = () => {
    let [shouldSendMessage, setShouldSendMessage] = useState(false);
    let inputSubjectElement = useRef(null);
    let inputMessageElement = useRef(null);

    const handleSendMessageClick = () => {
        inputSubjectElement.current.value = "";
        inputMessageElement.current.value = "";
        setShouldSendMessage(true);
    }

    const renderPopUp = () => {
        return <div>This button is not gonna send message but only will clear the input fields</div>
    }

    return (
        <div style={{textAlign: "center"}}>
            <Div>
                <FormGroup>
                    <Label>Subject:</Label>
                    <SubjectInput ref={inputSubjectElement} />
                </FormGroup>
                <FormGroup>
                    <Label>Message:</Label>
                    <MessageInput ref={inputMessageElement} />
                </FormGroup>
                <Button primary onClick={handleSendMessageClick}>Send</Button>
                {shouldSendMessage ? renderPopUp() : null}
            </Div>
        </div>
    )
}

const Div = Styled.div`
    display: inline-block;
    width: 40%;
`
const FormGroup = Styled.div`
    display: block;
	width: 90%;
    margin: 20% auto;
    margin-bottom: 0.5em;
`

const Label = Styled.label`
    font-size: 150%;
	margin-bottom: 0.5em;
	color: black;
    display: block;
`

const SubjectInput = Styled.input`
	padding: 1em;
	color: black;
	background: papayawhip;
	border: 1px solid black;
	border-radius: 10px;
	width: 100%;
    margin-bottom: 0.5em;
    &:hover {
        transform: scale(1.15);
      }
`
const MessageInput = Styled.input`
padding: 1em;
color: black;
background: papayawhip;
border: 1px solid black;
border-radius: 10px;
width: 100%;
margin-bottom: 0.5em;
height:10%;
&:hover {
    transform: scale(1.15);
  }
`

const Button = Styled.button`
width: 20%;
height: 40px;
cursor: pointer;
  background: transparent;
  border-radius: 5px;
  color: blue;
  border: 2px solid blue;
  transition: 0.5s all ease-out;
  &:hover {
    transform: scale(1.2);
    background-color: blue;
    color: white;
  }
`

export default ContactMe