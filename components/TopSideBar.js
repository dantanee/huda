import styled from 'styled-components';
import { FiMic, FiMusic, FiUser, FiBookOpen, FiFolder } from 'react-icons/fi';
import Link from 'next/link';
import ListItem from './styles/LinkStyles';

const primary = '#50c878';
const TopSideBar = () => (
  <Wrapper>
    <Heading>Huda</Heading>
    <ListItem>
      <FiMic color={primary} />
      <Link href="/podcast">
        <a>Podcast</a>
      </Link>
    </ListItem>
    <ListItem>
      <FiMusic color={primary} />
      <Link href="/">
        <a>Explore</a>
      </Link>
    </ListItem>
    <ListItem>
      <FiUser color={primary} />
      <Link href="/sheikh">
        <a>Sheikh</a>
      </Link>
    </ListItem>
    <ListItem>
      <FiBookOpen color={primary} />
      <Link href="/topics">
        <a>Books</a>
      </Link>
    </ListItem>
    <ListItem>
      <FiFolder color={primary} />
      <Link href="/books">
        <a>Topics</a>
      </Link>
    </ListItem>
  </Wrapper>
);

const Wrapper = styled.div``
const Heading = styled.h1`
  font-size: 32px;
  margin-bottom: 43px;
  background-color: ${primary};
  color:white;
  width:max-content;
  padding:10px 15px;
  transform:skewX(-15deg);
  font-family:'Source Sans Pro',sans-serif;
`;

export default TopSideBar;
