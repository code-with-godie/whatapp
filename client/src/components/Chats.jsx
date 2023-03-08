import { Search, Send } from '@mui/icons-material'
import EmojiPicker from 'emoji-picker-react';
import React, { useState } from 'react'
import styled from 'styled-components'
import Message from './Message'
const   Container = styled.div`
flex: 3;
display: flex;
flex-direction: column;
height: 100%;
`
const ChatPlaceholder = styled.div`
background: black url(${props => props.bg});
`
const ChatPlaceholderText = styled.p`
text-align: center;
`
const Top = styled.div`
padding:.5rem;
background-color: red;
`
const Center = styled.div`
flex: 1;
`
const Bottom = styled.div`
padding:.5rem;
background-color: #ededed;
`
const Image = styled.img`
width: 50px;
color: #ebeb18d6;
fill:#ebeb18d6 ;
stroke:#ebeb18d6 ;
cursor: pointer;
`
const FormContainer = styled.form`
display: flex;
align-items: center;
padding: 1rem;
gap:.5rem;
.emoji{
  color: #ebeb18d6;
  font-size: 2.5rem;
}
position: relative;
.emoji-picker{
  position: absolute;
  bottom: 3rem;
}
`
const PickerContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  padding: 1rem;
`
const InputContainer = styled.div`
flex: 1;
display: flex;
gap:.5rem;
align-items: center;
background-color: white;
padding:.5rem;
border-radius:1rem;
.search{
  font-size: 1.8rem; 
  color: #0000005d;
}
`
const Input = styled.input`
padding:.5rem;
border: none;
background: transparent;
outline: none;
font-size: 1.3rem;
`
const SubmitButton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
.icon{
  font-size: 2rem;
  color: #000000b7;
}
&:disabled{
  cursor: not-allowed;
}
`
const Chats = ({chats:defaultChats}) => {
  const [chats,setChats] = useState(defaultChats);
  const handleEmoji = (emojiObject)=>{
    setMessage(prev => prev + emojiObject.emoji)
  }
  const handleSubmit = e=>{
    e.preventDefault();
    setChats(prev => [...prev,message]);
    message('')
    
  }
  const [message,setMessage] = useState('');
  const [showEmojiPicker,setShowEmojiPicker] = useState(false);
  if(chats.length === 0){
    return (
      <Container>
        <ChatPlaceholder bg='assets/welcome.jpeg' />
        <ChatPlaceholderText>keep your phone connected</ChatPlaceholderText>
      </Container>
    )
  }
  return (
    <Container>
      <Top>

      </Top>
      <Center onClick={e => setShowEmojiPicker(false)} >
      {
        chats.map(item => <Message key={item.id} {...item} />)
      }
      </Center>
      <Bottom>
        <FormContainer onSubmit={handleSubmit} >
          <Image onClick={e => setShowEmojiPicker(prev => !prev)} src="assets/emoji.svg" alt="" />
          {
            showEmojiPicker && <PickerContainer className='emoji-container'>
              <EmojiPicker onEmojiClick= {handleEmoji} />
            </PickerContainer> 
          }
        <InputContainer>
        <Input
        value={message}
        onChange = {e => setMessage(e.target.value)}
        onFocus= {e=> setShowEmojiPicker(false)}
        placeholder='please enter to send...'
        />
        </InputContainer>
        <SubmitButton disabled = {message ? false : true} >
          <Send  className='icon'/>
        </SubmitButton>
        </FormContainer>
        
      </Bottom>
      
    </Container>
  )
}

export default Chats
