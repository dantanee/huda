/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Link from 'next/link';
import {} from 'react-icons/fi'

const Nav = () => (
    <Wrapper>
        <Link href="/events">
            
        </Link>
        <Link href="/announcements">
            <LinkWrapper>Announcements</LinkWrapper>
        </Link>
        <Link href="/learn">
            <LinkWrapper>Learn</LinkWrapper>
        </Link>
    </Wrapper>
);
const Wrapper = styled.nav`
display:flex;
align-items:baseline;
justify-content:space-between;
gap:48px;

`
const LinkWrapper = styled.a`
color:hsl(0,0%,52%);
text-decoration:none;
`;
export default Nav;
