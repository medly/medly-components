import styled from 'styled-components';

export const HeadRow = styled('tr')<{ gridTemplateColumns: string }>`
    display: grid;
    grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
    background-color: transparent;
`;
