import { css, styled } from '@medly-components/utils';
import { rgba } from 'polished';

export const THead = styled('thead')<{ showShadowAtBottom: boolean }>`
    display: block;
    position: sticky;
    top: 0;
    z-index: 3;
    min-width: fit-content;

    ${({ showShadowAtBottom, theme }) =>
        showShadowAtBottom &&
        css`
            &::after {
                content: '';
                bottom: -1.2rem;
                height: 1.2rem;
                width: 100%;
                position: absolute;
                background: linear-gradient(${rgba(theme.table.shadowColor, 0.2)}, ${rgba(theme.table.shadowColor, 0)});
            }
        `}
`;
