import { defaultTheme, LinkTheme } from '@medly-components/theme';
import React from 'react';
import { Link } from './Link';

export const ThemeInterface = (props: LinkTheme): any => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.link
};

export const Basic = () => <Link href="#">Add New Pharmacy</Link>;
