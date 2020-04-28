import { styled, WithThemeProp } from '@medly-components/utils';
import { StyledOptionsProps } from './types';

export const OptionsStyled = styled('ul')<StyledOptionsProps & WithThemeProp>`
    z-index: 1000;
    position: absolute;
    top: 5.6rem;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    max-height: 200px;
    overflow-y: auto;
    box-sizing: border-box;
    box-shadow: 0 2px 8px #b0bcc8;
    border-radius: ${({ variant }) => (variant === 'outlined' ? `0.4rem` : `0 0 0.4rem 0.4rem `)};
`;
