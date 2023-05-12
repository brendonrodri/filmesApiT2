import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    background-color: rgba(108, 122, 137 / 1) ;
    backdrop-filter: blur(15px);
    width:100%;
    height:12vh;
`
export const Nav = styled.nav`
    width: 80%;
`
export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: 100%;
    li{
        list-style: none;
        
    }

    a{
        text-decoration:none;
        color:white;
        font-size:1.2rem;
    }
`


export const Container = styled.section`
    background-color: tomato;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-wrap:wrap;
   
    color:white;
    border:solid white;

   
`

export const BoxTitle = styled.div`
    width:100%;
    height:10vh;
    border:solid white;
    color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    
    h2{
        font-size:1.2rem
    }

    img{
        width:15px;
        cursor:pointer;
    }
`

export const Caixa = styled.input`
    display:${props => props.show };
    border-radius:30px;

`


export const BoxFilms = styled.section`
    width:22%;

    img{
        width:80%;
    }
`




export const ContainerMain = styled.section`
    background-image: url(${props => props.background});
    background-size:100% 100%;
    background-repeat:no-repeat;
    height:100vh;


`