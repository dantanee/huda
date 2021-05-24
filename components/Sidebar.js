import styled from 'styled-components';
import TopSideBar from './TopSideBar';
import BottomSideBar from './BottomSideBar';

const Sidebar = () => (
  <Wrapper>
    <TopSideBar />
    <BottomSideBar />
  </Wrapper>
);
const Wrapper = styled.aside`
  /* background-color:#F6F7FB; */
  background-color: white;
  padding-top: 15px;
  padding-left: 25px;
  width: 169px;
  height: 100vh;
  border-right: solid 1px #f0f0f0;
`;
export default Sidebar;
