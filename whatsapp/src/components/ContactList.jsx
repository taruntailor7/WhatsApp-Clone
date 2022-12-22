import React, { useState } from 'react';
import styled from "styled-components";
import { Contact } from './Contact';
import { contactList } from "../../src/mockData";
import validateEmail from '../utility/utility';
import { searchUser } from '../managers/httpManager';

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

export const ContactList = ({setSelectedChat,picture}) => {
    const [searchString, setSearchString] = useState("");
    const [searchResult, setSearchResult] = useState("");

    const handleSearch = async (searchText)=>{
        setSearchString(searchText)
        if(!validateEmail(searchText)){
            return;
        }
        // console.log(searchText);
        const userData = await searchUser(searchText);
        console.log(userData,"user")
        if(userData.data?.success){
            setSearchResult(userData.data.responseData);
        }
    }

    return (
        <Container>
            <ProfileInfoDiv>
                <ProfileImage src={picture} referrerpolicy="no-referrer"/>
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
                <Contact key={userData.id} userData={userData} setSelectedChat={setSelectedChat} />
            ))}
        </Container>
    )
}
