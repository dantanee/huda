/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import {FaGratipay} from 'react-icons/fa';


const TrackSide = () => (
        <Wrapper>
            <Heading>
                Top Tracks
            </Heading>
            <Table>
                <tr>
                    <th>Sheikh</th>
                    <th>Title</th>
                    <th>Plays</th>
                    <th>Like</th>
                </tr>
                <tr>
                    <td>Sheikh Jafar</td>
                    <td>Mata Muminai</td>
                    <td>10k</td>
                    <td><FaGratipay color="#ef5350" size={18}/></td>
                </tr>
                <tr>
                    <td>Sheikh Mansoor</td>
                    <td>Gyaran Zuciya</td>
                    <td>12k</td>
                    <td><FaGratipay color="#ef5350" size={18}/></td>
                </tr>
                <tr>
                    <td>Sheikh Maqari</td>
                    <td>Ilimi</td>
                    <td>15k</td>
                    <td><FaGratipay color="#ef5350" size={18}/></td>
                </tr>
                <tr>
                    <td>Sheikh Aminu Daurawa</td>
                    <td>Auratayya</td>
                    <td>22k</td>
                    <td><FaGratipay color="#ef5350" size={18}/></td>
                </tr>
            </Table>
        </Wrapper>
    )
const Wrapper = styled.div`
padding-top:14px;
font-family:'Source Sans Pro',sans-serif;
`
const Heading = styled.h2`
color:white;
padding:8px;
width:max-content;
background-color:#50c878;
font-size:24px;
font-weight:bold;
font-family:inherit;
`
const ListItems = styled.li`
list-style:none;
display:flex;
justify-content:space-between;
margin-bottom:24px;
p{
    color:hsl(0,0%,49%);
}
h3{
    color:hsl(0,0%,45%);
}
`
const Table = styled.table`
width:100%;
padding-right:24px;  

td, th {
  /* border: 1px solid #dddddd; */
  text-align: left;
  padding: 8px;
  font-family:'Source sans pro',sans-serif;
}
td{
    color:hsl(0,0%,49%);
}
th {
    color:#50c878;
}

/* tr:nth-child(even) {
  background-color: #dddddd;
} */
`
const TopBar = styled.ol`
padding-right:30px;

`
export default TrackSide;