import styled from "styled-components";

export const Table = styled.table`
width: 100%;
border-collapse: collapse;
text-align: left;
`;

export const TableHead = styled.thead`
th {
    background-color: #101010;
    text-transform: uppercase;
    color: #00ad5f;
    font-size: 15px;
    font-weight: 500;
    padding: 20px 10px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 999;
}
`;

export const TableBody = styled.tbody`
color: #b1b1b1;
font-size: 15px;
td {
    padding: 10px;
    vertical-align: top;
}
tr:nth-child(odd){
    background-color: #252525;
}
tr:nth-child(even){
    background-color: #202020;
}
`;

export const DetailTable = styled.table`
width: 100%;
th {
    padding: 5px;
    text-transform: uppercase;
    font-weight: 500;
}
td {
    vertical-align: top;
}
`;
