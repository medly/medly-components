import { BreakPointsTheme } from '../breakPoints/types';

export interface CardTheme {
    backgroundColor: string;
    separatorColor: string;
    shadowColor: string;
    borderRadius: string;
    padding: {
        [k in keyof BreakPointsTheme]: string;
    };
}
