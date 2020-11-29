import { BreakpointsTheme } from '@medly-components/theme';

type Breakpoint = keyof BreakpointsTheme;

export const breakpoints = (bp: BreakpointsTheme) => {
    const up = (key: Breakpoint) => `@media (min-width: ${bp[key].min}px)`,
        down = (key: Breakpoint) => `@media (max-width: ${bp[key].max}px)`,
        between = (start: Breakpoint, end: Breakpoint) => `@media (min-width: ${bp[start].min}px) and (max-width: ${bp[end].max}px)`,
        only = (key: Breakpoint) => between(key, key),
        multiple = (sizes: Breakpoint | Breakpoint[]) => {
            const sizesAsArray = Array.isArray(sizes) ? sizes : [sizes];
            return `@media ${sizesAsArray.map(size => `(min-width: ${bp[size].min}px) and (max-width: ${bp[size].max}px)`).join(',')}`;
        };

    return {
        up,
        down,
        only,
        between,
        multiple
    };
};
