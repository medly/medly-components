import { styled } from '@medly-components/utils';
import { WithThemeProp } from '@medly-components/utils';

export const OptionsStyled = styled('ul')<WithThemeProp>`
    list-style: none;
    padding: 0px;
    margin: 0px;
    max-height: 200px;
    overflow: auto;
    border: 1px solid ${({ theme }) => theme.select.borderColor};
    box-sizing: border-box;
    border-radius: 4px;
`;
