import styled from 'styled-components';
import Link from 'next/link';

import { FiRadio, FiHeadphones, FiHeart } from 'react-icons/fi';
import ListItem from './styles/LinkStyles';

const primary = '#50c878';
const BottomSideBar = () => (
  <Wrapper>
    <Heading>For You</Heading>
    <ListItem>
      <FiRadio color={primary} />
      <Link href="/new">
        <a>New</a>
      </Link>
    </ListItem>
    <ListItem>
      <FiHeart color={primary} />
      <Link href="/likes">
        <a>Likes</a>
      </Link>
    </ListItem>
    <ListItem>
      <FiHeadphones color={primary} />
      <Link href="/playlist">
        <a>Playlist</a>
      </Link>
    </ListItem>
  </Wrapper>
);
const Wrapper = styled.div``;
const Heading = styled.h2`
  font-size: 16px;
  color:hsl(0, 0%, 39%);
  margin-bottom:21px;
`;
export default BottomSideBar;
