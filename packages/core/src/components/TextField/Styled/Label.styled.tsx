import { css, getFontStyle, styled } from '@medly-components/utils';

const getStyle = (required: boolean, variant: 'outlined' | 'filled' | 'b2cField') => {
    if (required && variant !== 'b2cField') {
        return css`
            ::after {
                content: ' *';
            }
        `;
    } else if (!required && variant === 'b2cField') {
        return css`
            ::after {
                content: ' (Optional)';
            }
        `;
    }
};

export const Label = styled('label')<{ required: boolean; variant: 'outlined' | 'filled' | 'b2cField'; size: 'S' | 'M' }>`
    top: 50%;
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

    ${({ required, variant }) => getStyle(required, variant)}
`;
