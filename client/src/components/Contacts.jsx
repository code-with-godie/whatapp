import React from 'react'
import styled from 'styled-components'
import {contactList,messagesList} from '../data/data'
import {Avatar, IconButton} from '@mui/material'
import {MoreVert,DonutLargeRounded,ChatRounded, Search }from '@mui/icons-material';
import Room from './Room';
const   Container = styled.div`
flex: 1.5;
display: flex;
flex-direction: column;
height: 100%;
`
const Top = styled.div`
display: flex;
flex-direction: column;
gap:.5rem;
`
const ProfileContainer = styled.div`
display: flex;
gap: 1rem;
padding:.5rem;
background-color: #f2f2f2;;
`
const Profile = styled.div`
flex: 1;
`
const InputContainer = styled.div`
display: flex;
align-items: center;
gap:.5rem;
padding: .5rem;
background-color: #e4e0e089;
border-radius: 1rem;
width: 96%;
margin:0 auto;
.search{
  color: #969696;
  font-size: 1.5rem;
  cursor: pointer;
}
`
const Input = styled.input`
flex: 1;
border: none;
outline: none;
background: transparent;
font-size:1rem;
::placeholder{
  color: #969696;
  font-style: oblique;
}
`
const IconContainer = styled.div`
display: flex;
align-items: center;
gap:.5rem;

`
const Bottom = styled.div`
flex: 1;

`
const Contacts = ({setCurrentChat}) => {
  return (
    <Container>
      <Top>
        <ProfileContainer>
          <Profile>
          <Avatar className='logo' src='profile/me.jpg' />
          </Profile>
          <IconContainer>
            <IconButton>
            <DonutLargeRounded/>
            </IconButton>
            <IconButton>
            <ChatRounded/>
            </IconButton>
            <IconButton>
            <MoreVert/>
            </IconButton>
          </IconContainer>
        </ProfileContainer>
        <InputContainer>
        <Search className='search'/>
        <Input placeholder='seach..' />
        </InputContainer>
      </Top>
      <Bottom>
        {
          contactList.map(item => <Room setCurrentChat={setCurrentChat} chats={messagesList} key={item.id} {...item} />)
        }
      </Bottom>
    </Container>
  )
}

export default Contacts
