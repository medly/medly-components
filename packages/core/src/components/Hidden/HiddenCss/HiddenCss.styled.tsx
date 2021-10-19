import { breakpoints, css, InjectClassName, media, styled } from '@medly-components/utils';
import { HiddenProps } from '../types';

const hide = css`
    display: none;
`;

export const HiddenCss = styled(InjectClassName)<HiddenProps>`
    ${({ theme, up }) =>
        up &&
        media(breakpoints(theme.breakpoints).up(up))`
            display: none;
        `}
    ${({ theme, down }) =>
        down &&
        media(breakpoints(theme.breakpoints).down(down))`
            display: none;
        `}
    ${({ theme, between }) =>
        between &&
        media(breakpoints(theme.breakpoints).between(between.start, between.end))`
            display: none;
        `}
    ${({ theme, only }) =>
        only &&
        media(breakpoints(theme.breakpoints).only(only))`
            display: none;
        `}
    ${({ theme, multiple }) =>
        multiple &&
        media(breakpoints(theme.breakpoints).multiple(multiple))`
            display: none;
        `}
    
        ${({ up, down, between, only, multiple }) => !up && !down && !between && !only && !multiple && hide}
`;
HiddenCss.displayName = 'HiddenCss';
