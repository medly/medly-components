import { styled, WithThemeProp } from '@medly-components/utils';

export const OptionsStyled = styled('ul')<WithThemeProp>`
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 200px;
    overflow: auto;
    border: 1px solid ${({ theme }) => theme.select.borderColor};
    background-color: ${({ theme }) => theme.select.bgColor};
    box-sizing: border-box;
    border-radius: 4px;
`;
