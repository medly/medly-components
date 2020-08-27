import { css, styled } from '@medly-components/utils';

export const Label = styled('label')<{ required: boolean; variant: 'outlined' | 'filled' }>`
    top: 50%;
    left: 0;
    cursor: text;
    user-select: none;
    position: absolute;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 1.6rem;
    line-height: 2.6rem;
    transform-origin: 0 0;
    touch-action: manipulation;
    transform: ${({ variant }) => (variant === 'outlined' ? 'translateY(-50%) ' : 'translateY(-52%) ')};
    opacity: 1;

    ${({ required }) =>
        required &&
        css`
            ::after {
                content: ' *';
            }
        `}
`;
