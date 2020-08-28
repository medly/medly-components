import { css, getFontStyle, styled } from '@medly-components/utils';

export const Label = styled('label')<{ required: boolean; variant: 'outlined' | 'filled'; size: 'S' | 'M' }>`
    top: 50%;
    left: 0;
    cursor: text;
    user-select: none;
    position: absolute;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    ${({ theme, size }) => getFontStyle({ theme, fontVariant: theme.textField.textVariant[size] })}
    transform-origin: 0 0;
    touch-action: manipulation;
    transform: translateY(-50%);
    opacity: 1;

    ${({ required }) =>
        required &&
        css`
            ::after {
                content: ' *';
            }
        `}
`;
