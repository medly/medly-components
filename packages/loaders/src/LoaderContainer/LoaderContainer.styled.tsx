import styled from 'styled-components';

export const List = styled('div')`
    display: flex;
    flex-flow: row wrap;
    list-style: none;
`;

export const Item = styled('div')`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-width: 140px;
    padding: 0 7.5px 20px;
    word-wrap: break-word;

    & > span:last-of-type {
        margin-top: 8px;
        font-size: 14px;
    }
`;
