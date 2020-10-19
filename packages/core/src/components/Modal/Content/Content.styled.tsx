import { css, styled } from '@medly-components/utils';
import { Props } from './types';

export const Content = styled('div')`
    flex: 1;
    overflow: hidden;
    padding: ${({ theme }) => `0 ${theme.spacing.S4}`};

    ${({ scrollState }: Props) => {
        const { scrollPosition } = scrollState;
        const scrollPositionRem = scrollPosition ? scrollPosition / 10 : 0;

        return css`
            padding-top: ${6.6 - scrollPositionRem > 1.9 ? '0' : '12.5rem'};
        `;
    }}
`;
