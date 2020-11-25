import { breakPoints, css, InjectClassName, media, styled } from '@medly-components/utils';
import { Props } from '../types';

const hide = css`
    display: none;
`;

export const HiddenCss = styled(InjectClassName)<Props>`
    ${({ theme, up }) =>
        up &&
        media(breakPoints(theme.breakPoints).up(up))`
            display: none;
        `}
    ${({ theme, down }) =>
        down &&
        media(breakPoints(theme.breakPoints).down(down))`
            display: none;
        `}
    ${({ theme, between }) =>
        between &&
        media(breakPoints(theme.breakPoints).between(between.start, between.end))`
            display: none;
        `}
    ${({ theme, only }) =>
        only &&
        media(breakPoints(theme.breakPoints).only(only))`
            display: none;
        `}
    ${({ theme, multiple }) =>
        multiple &&
        media(breakPoints(theme.breakPoints).multiple(multiple))`
            display: none;
        `}
    
        ${({ up, down, between, only, multiple }) => !up && !down && !between && !only && !multiple && hide}
`;
HiddenCss.displayName = 'HiddenCss';
