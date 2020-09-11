import { styled, WithThemeProp } from '@medly-components/utils';
import { StyledOptionsProps } from './types';

export const Options = styled('ul')<StyledOptionsProps & WithThemeProp>`
    z-index: 1000;
    position: absolute;
    background: ${({ theme }) => theme.colors.white};
    top: ${({ size, isNested, variant, theme }) =>
        isNested ? 0 : variant === 'flat' ? theme.singleSelect.variant.flat.height : theme.textField.height[size]};
    left: ${({ isNested }) => (isNested ? `calc(100% - 0.4rem) ` : 0)};
    margin: 0;
    padding: 0.8rem;
    width: ${({ isNested }) => (isNested ? 'max-content' : '100%')};
    min-width: fit-content;
    list-style: none;
    box-sizing: border-box;
    box-shadow: 0 0.2rem 0.8rem ${({ theme }) => theme.singleSelect.shadowColor};
    border-radius: ${({ theme, variant }) => theme.singleSelect.options.borderRadius[variant]};
`;
