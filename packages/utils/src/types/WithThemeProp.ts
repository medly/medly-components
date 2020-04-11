import { Theme } from '@medly-components/theme';

export interface WithThemeProp {
    theme?: Theme;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}
