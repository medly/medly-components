import { css, styled } from '@medly-components/utils';

export const Label = styled('label')<{ required: boolean; variant: 'outlined' | 'filled' }>`
    top: 0;
    left: 0;
    cursor: text;
    user-select: none;
    position: absolute;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 1.6rem;
    line-height: 2.6rem;
    transform-origin: 0 0;
    touch-action: manipulation;
    transform: ${({ variant }) => (variant === 'outlined' ? `translate3d(0, 55%, 0) ` : `translate3d(0, 58%, 0) `)};

    ${({ required }) =>
        required &&
        css`
            ::after {
                content: ' *';
            }
        `}
`;
