/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import FeaturedSide from './FeaturedSide';
import TrackSide from './TrackSide';
const MiddleSection = () => (
        <Wrapper>
            <FeaturedWrapper>
            <FeaturedSide /> 
            </FeaturedWrapper>
           <TrackWrapper>
           <TrackSide />
           </TrackWrapper>
        </Wrapper>
    )
const Wrapper = styled.div`
/* display:flex;
flex-direction:row-reverse;
height:600px; */
/* background-color:#F4F9FF; */
`
const FeaturedWrapper = styled.div`
width:100%;
`
const TrackWrapper = styled.div`

`
export default MiddleSection;