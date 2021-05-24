/* eslint-disable prettier/prettier */
import {FiSearch} from 'react-icons/fi'
import styled from 'styled-components';

const Search = () => (
    
        <InputIcon>
        <InconWrapper><FiSearch  size={16} color='hsl(0, 0%, 29%)'/></InconWrapper> 
        <Input placeholder="Search sheikh,topics,books..." type="text" />
        </InputIcon>
        
        
        
        
    )
// const Wrapper = styled.div`
// padding-top:24px;
// padding-left:24px;
// display:flex;
// align-items:baseline;
// width:800px;

// `
const InputIcon = styled.label`
display:block;
position:relative;
margin-right:20px
`
const Input = styled.input`
height:${24 / 16} rem;
padding-left:26px;
border:none;
font-family:'Source Sans pro',sans-serif;
/* border-bottom:1px solid #309F5E; */


/* border-bottom:1px solid #309f5e; */
width:200px;
&::placeholder {
    font-weight: 600;
    color: #9E9E9E;
  }
`
const InconWrapper = styled.div`
position:absolute;
top:0%;
bottom:0;
margin:auto 0;
height:16px;
`

export default Search;