import { defaultTheme, HeaderTheme } from '@medly-components/theme';
import { FCC } from 'react';
import { Context } from './Header.context';
import { HeaderStaticProps } from './types';

export const Theme: FCC<HeaderTheme> = () => null;
Theme.defaultProps = {
    ...defaultTheme.header
};

export const StaticProps: FCC<HeaderStaticProps> = () => null;
export const ContextTheme: FCC<Context> = () => null;
