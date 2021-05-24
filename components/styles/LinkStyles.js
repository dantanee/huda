import styled from 'styled-components';

const ListItem = styled.li`
  list-style: none;
  display: flex;
  margin-bottom: 24px;
  gap: 10px;
  a {
    text-decoration: none;
    color: hsl(0, 0%, 49%);
    font-size: 14px;
    font-family:'Source Sans Pro',sans-serif;
  }
`;
export default ListItem;
