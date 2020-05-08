import { styled } from '@medly-components/utils';

export const HeadRow = styled('tr')<{ gridTemplateColumns: string }>`
    display: grid;
    grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
    background-color: transparent;
`;
