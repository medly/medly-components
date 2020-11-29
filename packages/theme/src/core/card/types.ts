import { BreakpointsTheme } from '../breakpoints1/types';

export interface CardTheme {
    backgroundColor: string;
    separatorColor: string;
    shadowColor: string;
    borderRadius: string;
    padding: {
        [k in keyof BreakpointsTheme]: string;
    };
}
