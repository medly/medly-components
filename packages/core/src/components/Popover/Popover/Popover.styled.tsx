import { fullHeight, fullWidth, styled } from '@medly-components/utils';
import { Props } from './types';

export const PopoverStyled = styled('div')<Props>`
    position: absolute;
    z-index: 1000;
    transition: all 2ms ease-in-out;
    border-radius: 4px;

    ${props => props.fullWidth && fullWidth()};
    ${props => props.fullHeight && fullHeight()};
`;
