import { BreakPointsTheme } from '@medly-components/theme';

type Breakpoint = keyof BreakPointsTheme;

export interface Props {
    up?: Breakpoint;
    down?: Breakpoint;
    between?: { start: Breakpoint; end: Breakpoint };
    only?: Breakpoint;
    multiple?: Breakpoint | Breakpoint[];
}

export interface ImplementationProps extends Props {
    implementation?: 'js' | 'css';
}
