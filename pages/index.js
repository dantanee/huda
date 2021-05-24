/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main'
import MiddleSection from '../components/MiddleSection';

const IndexPage = () =>(
        <Wrapper>
        
        <Sidebar />
        <MainWrapper>
        {/* <Header /> */}
        <Main />
        <MiddleSection />
        </MainWrapper>

        {/* <MainWrapper>
        <Main />
        </MainWrapper>
       <MiddleSection /> */}
    </Wrapper>
    )

;
const Wrapper = styled.div`
display:flex;

`
const MainWrapper = styled.div`
flex:1;
width:100%;
`
export default IndexPage;
