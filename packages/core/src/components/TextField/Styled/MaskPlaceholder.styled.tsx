import { css, styled } from '@medly-components/utils';
import { TextFieldProps } from '../types';

const center = css`
        top: 50%;
        transform: translateY(-50%);
    `,
    bottom = css<{ variant?: TextFieldProps['variant'] }>`
        bottom: ${({ variant }) => (variant === 'filled' ? '0.7rem' : '0.6rem')};
    `;

export const MaskPlaceholder = styled('span')<{
    isLabelPresent?: boolean;
    variant?: TextFieldProps['variant'];
    size?: TextFieldProps['size'];
}>`
    position: absolute;
    left: 0;
    opacity: 0;
    cursor: text;
    user-select: none;
    pointer-events: none;
    color: ${({ theme }) => theme.textField.filled.active.placeholderColor};
    ${({ isLabelPresent, size }) => (isLabelPresent && size !== 'S' ? bottom : center)}
`;
