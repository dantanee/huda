/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const FeaturedSide = () => (
        <Wrapper>
            <Heading>Sheikhs</Heading>
            <Carousel>
                <ListItem>
                    <img src="sheikhjafar.jpeg" alt="sheikh jafar"/>
                    Shk.Jafar Adam
                </ListItem>
                <ListItem>
                    <img src="sheikhmansoor.jpg" alt="sheikh mansoor"/>
                    Shk.Mansoor Imam
                </ListItem>
                <ListItem>
                    <img src="Aminudaurawa.jpeg" alt="daurawa"/>
                    Shk.Aminu Daurawa
                </ListItem>
                <ListItem>
                    <img src="ibrahimMaqari.jpeg" alt="Maqari"/>
                    Shk.Ibrahim Maqari
                </ListItem>
                <ListItem>
                    <img src="ibrahimsaleh.jpeg" alt="Ibrahim saleh"/>
                    Shk.Ibrahim Saleh
                </ListItem>
                <ListItem>
                    <img src="ahmadtijjani.jpeg" alt="Ahmad tijjani"/>
                    Shk.Ahmad Guntumi
                </ListItem>
                <ListItem>
                    <img src="pantami.jpeg" alt="pantami"/>
                    Shk.Ali Pantami
                </ListItem>
                <ListItem>
                    <img src="dahiruusman.jpeg" alt="dahirubauchi"/>
                    Shk.Dahiru Bauchi
                </ListItem>
                <ListItem>
                    <img src="ahmadbuk.jpeg" alt="ahmadbuk"/>
                    Shk.Ahmad BUK
                </ListItem>
            </Carousel>
        </Wrapper>
    )
const Wrapper = styled.div`
padding-top:14px;
width:auto;
`
const Heading = styled.h2`
color:white;
/* padding: 2px 8px; */
padding:2px 5px;
width:max-content;
background-color:#50c878;
font-size:24px;
font-weight:bold;
font-family:inherit;
font-family:'Source sans pro',sans-serif;
`
const Carousel = styled.ul`
   /* width:500px; */
   width:1100px;
    margin-top:14px;
    overflow:auto;
    white-space:nowrap;
    
`
const ListItem = styled.li`
display:inline-flex;
list-style:none;
width:min-content;
text-align:center;
margin-right:30px;
flex-direction:column;
align-items:center;

img {
    width:80px;
    height:80px;
    border-radius:50%;
}
font-family:'Source sans pro',sans-serif;
color:hsl(0,0%,49%);

`
export default FeaturedSide;