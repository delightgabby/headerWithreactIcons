import React from "react"
import styled from "styled-components"
import {AiOutlineLogin} from "react-icons/ai";
import {FcHome} from "react-icons/fc"
import {BsFillCalendarEventFill} from "react-icons/bs"
import {GrGallery} from "react-icons/gr"
import {FcAbout} from "react-icons/fc"
import {BiMoviePlay} from "react-icons/bi"
import logo from "../Assets/logoa.png"
import {GoThreeBars} from "react-icons/go";
// import {GiCancel} from "react-icons/gi"




const Header = () =>{
    return(
        <Hcontainer>
            <Wrapperone>
            <Img src={logo} alt="" />&nbsp;CODELAB
            </Wrapperone>
           

             <Wrappertwo>
                 <Innerwrap1>
                     <Span><FcHome/>&nbsp;HOME</Span>
                     <Span><BsFillCalendarEventFill/>&nbsp;EVENT</Span>
                     <Span><GrGallery/>&nbsp;GALLERY</Span>
                     <Span><FcAbout/>&nbsp;ABOUT</Span>
                     <Span><BiMoviePlay/>&nbsp;MOVIES</Span>
                     <Innerwrap2>
                     <Button><AiOutlineLogin/>&nbsp;LOGIN</Button>
                 </Innerwrap2>
                 <Burger>
                 <GoThreeBars size="200px"/>
                 </Burger>
                 </Innerwrap1>
              
            </Wrappertwo>
            
        </Hcontainer>
    )
}

export default Header;

const Hcontainer =styled.div`
width: 100%;
/* height: 15vh; */
background-color: gold;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;


`;

const Wrapperone =styled.div`
width: 15%;
height: 10vh;
/* background-color: green; */
display: flex;
justify-content: left;
align-items: center;
font-family: arial;
font-size: 25px;
font-weight: bolder;
`;

const Img =styled.img`
width: 27%;
height: 8vh;
border-radius: 10px;
`;

const Wrappertwo =styled.div`
width: 83%;
/* height: 13vh; */
/* background-color: black; */
display: flex;
justify-content: right;
align-items: center;
flex-direction: row;

`;



const Innerwrap1 =styled.div`
width: 55%;
height: 10vh;
/* background-color: white; */
display: flex;
justify-content: space-between;
align-items: center;
font-family: arial;
font-size: 15px;
font-weight: bolder;

@media screen and (max-width: 768px){
    display: none;
}


`;


 const Burger =styled.div`
 display: none;
 `;

const Span =styled.div`
/* background-color: blue; */
display: flex;
justify-content: center;
align-items: center;

&:hover{
    width: 18%;
    height: 5vh;
    background-color: white;
    transition: 0.4s ease-in-out;
    color: black;
    /* border: solid black 2px; */
    border-radius: 20px;
    cursor: pointer;

}

`;


const Innerwrap2 =styled.div`
width: 25%;
height: 10vh;
/* background-color: brown; */
display: flex;
justify-content: right;
align-items: center;


`;

const Button =styled.button`
width: 60%;
height: 6vh;
background-color: black;
cursor: pointer;
font-weight: bolder;
font-size: 15px;
color: white;
border-radius: 10px;
border: none;
display: flex;
justify-content: center;
align-items: center;

&:hover{
    background-color: gold;
    transition: 0.4s ease-in-out;
    color: black;
    border: solid black 2px;
}

`;
