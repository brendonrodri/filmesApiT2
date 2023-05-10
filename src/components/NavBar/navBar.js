import React from "react"
import styled from "styled-components"

const NavContainer = styled.nav`
    display: flex;
    height: 15vh;
    justify-content: space-around;
    align-items: center;
    background-color: #000000;
`
const NavList = styled.ul`
    width: 65%;
    display: flex;
    justify-content: space-around;
    `
const NavItem = styled.li`
   
    list-style: none;
    font-size: 1.3rem;
    color: #f2f2f2;

`
const Input = styled.input`
     width: 20%;
     height: 4vh;
`

export default function NavComponent (){

    return(
        <NavContainer>
            <NavList>
                <NavItem>Comédia</NavItem>
                <NavItem>Ficção</NavItem>
                <NavItem>Drama</NavItem>
                <NavItem>Terror</NavItem>
                <NavItem>Suspense</NavItem>
                <NavItem>Ação</NavItem>
            </NavList>
            <SearchInput />
        </NavContainer>
    )
}

const SearchInput = () =>{
    return <Input />
}