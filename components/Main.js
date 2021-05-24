/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Header from '../components/Header';
// import Sheikh from '../assets/Images/sheikhdahir1.png'

const main = () => {
    return (
        <Wrapper>
        <TextWrapper>
            <SmallHeading>Trending</SmallHeading>
            <BigHeading>Darikar Tijjaniyya ba bidi'a bane</BigHeading>
             <ButtonWrapper>Play</ButtonWrapper>
 
        </TextWrapper>
         <img src="/sheikhdahir2.png" height="100%" width="50%" alt="Shehu Dahiru"/>
         </Wrapper>
    )

}

const Main = () =>  (

        <MainWrapper>
            <Header />
              <Wrapper>
        <TextWrapper>
           <SmallHeading>Trending</SmallHeading>
           <BigHeading>An yanka ta tashi</BigHeading>
            <ButtonWrapper>Play</ButtonWrapper>

       </TextWrapper>
        <img src="/sheikhdahir2.png" height="100%" width="50%" alt="Shehu Dahiru"/>
    </Wrapper>
        </MainWrapper>
      
    
    
)
const MainWrapper = styled.div`
min-height:min(60vh,400px);
background:linear-gradient(to right, #1cd8d2, #93edc7);
`
const Wrapper = styled.div`

width:100%;
display:flex;
justify-content:space-between;



/* backgroun-color:#50c878;d */
/* background-color:hsl(213, 100%, 98%); */

margin-top:30px;
`
const TextWrapper = styled.section`
position:relative;
top:80px;
left:230px;
width:300px;

`
const SmallHeading = styled.h3`
color:white;
font-size:18px;
text-transform:uppercase;
opacity:0.5;
`
const BigHeading = styled.h1`
color:white;
font-size:32px;
font-weight:bold;
width:fit-content;
font-family:'Source Sans Pro',sans-serif;
`
const ButtonWrapper = styled.button`
font-size:1rem;
padding:4px 12px;
border-radius:2px;
width:104px;
font-weight:bold;
background-color:white;
border:2px solid transparent;
color:#309f5e;
margin-top:20px;
font-family:'Source Sans Pro',sans-serif;
`
const Heading = styled.h1`
color:white;
width:min-content;
font-size:32px;
position:absolute;
top:20px;
left:40px;
`
export default Main;