import { styled, WithThemeProp } from '@medly-components/utils';
import { StyledOptionsProps } from './types';

export const Options = styled('ul')<StyledOptionsProps & WithThemeProp>`
    z-index: 1000;
    position: absolute;
    top: ${({ isNested }) => (isNested ? 0 : '5.6rem')};
    left: ${({ isNested }) => (isNested ? `calc(100% - 0.4rem) ` : 0)};
    margin: 0;
    padding: 0;
    width: ${({ isNested }) => (isNested ? 'max-content' : '100%')};
    list-style: none;
    box-sizing: border-box;
    box-shadow: 0 0.2rem 0.8rem ${({ theme }) => theme.singleSelect.shadowColor};
    border-radius: ${({ variant }) => (variant === 'outlined' ? `0.4rem` : `0 0 0.4rem 0.4rem `)};

    li:first-child {
        border-radius: ${({ variant }) => (variant === 'outlined' ? `0.4rem 0.4rem 0 0` : 0)};
    }

    li:last-child {
        border-radius: 0 0 0.4rem 0.4rem;
    }
`;
