import { BreakPointsTheme } from '@medly-components/theme';

type Breakpoint = keyof BreakPointsTheme;

export interface Props {
    /** Will hide the children at and above of the breakpoint */
    up?: Breakpoint;
    /** Will hide the children at and down of the breakpoint */
    down?: Breakpoint;
    /** Will hide the children between start and end of the breakpoint */
    between?: { start: Breakpoint; end: Breakpoint };
    /** Will hide the children only in the specified breakpoint */
    only?: Breakpoint;
    /** Will hide the children in the specified list of breakpoints */
    multiple?: Breakpoint | Breakpoint[];
}

export interface ImplementationProps extends Props {
    /** Implementation type for hiding the children */
    implementation?: 'js' | 'css';
}
