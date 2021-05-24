/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import Nav from './Nav';
import Search from './Search';
import Login from './Login';
import Notification from './Notifications'
import Settings from './Settings';

const Header = () => (
        <Wrapper>
            {/* <NavWrapper>
            <Nav />
            </NavWrapper> */}
                <Search />
                <SettingsWrapper>
                <Notification />
                <Settings />
                <Login />
                </SettingsWrapper>
                
                
                
        </Wrapper>


    )
const Wrapper = styled.header`
display:flex;
align-items:center;
justify-content:space-between;
padding-top:15px;
padding-left:20px;
padding-right:20px;
width:100%;

`
const SettingsWrapper= styled.div`
display:flex;
align-items:center;
gap:20px;
`
export default Header;