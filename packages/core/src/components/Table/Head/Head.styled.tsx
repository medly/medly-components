import { css, styled } from '@medly-components/utils';

export const THead = styled('thead')<{ showShadowAtBottom: boolean }>`
    display: block;
    position: sticky;
    top: 0;
    z-index: 3;
    min-width: fit-content;

    ${({ showShadowAtBottom }) =>
        showShadowAtBottom &&
        css`
            &::after {
                content: '';
                bottom: -1.2rem;
                height: 1.2rem;
                width: 100%;
                position: absolute;
                background: linear-gradient(rgba(96, 120, 144, 0.15), rgba(19, 24, 29, 0));
            }
        `}
`;
