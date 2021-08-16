import { defaultTheme, HeaderTheme } from '@medly-components/theme';
import { FC } from 'react';
import { Context } from './Header.context';
import { HeaderStaticProps } from './types';

export const Theme: FC<HeaderTheme> = () => null;
Theme.defaultProps = {
    ...defaultTheme.header
};

export const StaticProps: FC<HeaderStaticProps> = () => null;
export const ContextTheme: FC<Context> = () => null;
