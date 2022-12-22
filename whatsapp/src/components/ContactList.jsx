/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Contact } from './Contact';
import validateEmail from '../utility/utility';
import { getChannelList, searchUser } from '../managers/httpManager';

const Container = styled.div`
    display: flex;
    flex-direction:column;
    height: 100%;
    width:30%
`;

const ProfileInfoDiv = styled.div`
    display: flex;
    flex-direction:column;
    background: #ededed;
    padding: 10px;
`;

const ProfileImage = styled.img`
    width:32px;
    height: 32px;
    border-radius: 50%;
`;

const SearchBox = styled.div`
    display: flex;
    background: #f6f6f6;
    padding: 10px;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction:row;
    background : white;
    border-radius: 8px;
    width: 100%;
    padding: 5px 10px;
`;

const SearchIcon = styled.img`
    width: 28px;
    height: 28px;
`;

export const SearchInput = styled.input`
    width: 100%;
    font-size: 15px;
    border: none;
    outline: none;
    margin-left: 10px;  
`;

const SearchResults = styled.div`
    width:100%;
    height:100px;
`

export const ContactList = ({setSelectedChat, userInfo, setRefreshContactList}) => {
    const [searchString, setSearchString] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [contactList, setContactList] = useState([]);

    const refreshContacts = async ()=>{
        const contactlistData =   await getChannelList(userInfo.email);
        setContactList(contactlistData.data.responseData);
        setSearchString();
        setSearchResult();
    }

    useEffect(()=>{
        refreshContacts();
    },[setRefreshContactList])

    const handleSearch = async (searchText)=>{
        setSearchString(searchText)
        if(!validateEmail(searchText)){
            return;
        }
        const userData = await searchUser(searchText);
        if(userData.data?.success){
            setSearchResult(userData.data.responseData);
        }
    }

    return (
        <Container>
            <ProfileInfoDiv>
                <ProfileImage src={userInfo.picture} referrerpolicy="no-referrer"/>
            </ProfileInfoDiv>
            <SearchBox>
                <SearchContainer>
                    <SearchIcon src={"/search-icon.svg"} />
                    <SearchInput placeholder="Search or start new chat" value={searchString} onChange={(e)=>handleSearch(e.target.value)}/>
                </SearchContainer>
            </SearchBox>
            {searchResult && (
                <SearchResults>
                    <Contact userData={searchResult} setSelectedChat={setSelectedChat} />
                </SearchResults>
            )}
            {contactList.map((userData)=>(
                <Contact key={userData._id} userInfo={userInfo} userData={userData} setSelectedChat={setSelectedChat} />
            ))}
        </Container>
    )
}
