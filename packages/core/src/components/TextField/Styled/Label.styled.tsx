import { css, getFontStyle, styled } from '@medly-components/utils';

const getStyle = (required: boolean, variant: 'outlined' | 'filled' | 'fusion') => {
    if (required && variant !== 'fusion') {
        return css`
            ::after {
                content: ' *';
            }
        `;
    } else if (!required && variant === 'fusion') {
        return css`
            ::after {
                content: ' (Optional)';
            }
        `;
    }
};

export const Label = styled('label')<{
    required: boolean;
    variant: 'outlined' | 'filled' | 'fusion';
    size: 'S' | 'M';
    multiline: boolean;
    inputWidth: number;
}>`
    top: ${({ multiline }) => (multiline ? '1.1rem' : '50%')};
    left: 0;
    cursor: text;
    user-select: none;
    position: absolute;
    pointer-events: none;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    ${({ theme, size }) => getFontStyle({ theme, fontVariant: theme.textField.textVariant[size] })}
    transform-origin: 0 0;
    touch-action: manipulation;
    transform: translateY(-50%);
    opacity: 1;
    z-index: 1;
    width: ${({ inputWidth }) => `calc(${inputWidth}px - 2rem) `};
    max-width: min-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${({ required, variant }) => getStyle(required, variant)}
`;

export const HiddenLabelContainer = styled('span')<{ size: 'S' | 'M' }>`
    width: auto;
    display: inline-block;
    position: absolute;
    visibility: hidden;
    pointer-events: none;
    z-index: -1;
    ${({ theme, size }) => getFontStyle({ theme, fontVariant: theme.textField.textVariant[size] })}
`;
