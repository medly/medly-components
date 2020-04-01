import { defaultTheme, LinkTheme } from '@medly-components/theme';
import React from 'react';
import { Link } from './Link';

export const ThemeInterface: React.SFC<LinkTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.link
};

export const Basic = () => <Link href="#">Add New Pharmacy</Link>;
