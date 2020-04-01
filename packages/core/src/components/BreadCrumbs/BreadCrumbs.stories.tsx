import { BreadCrumbsTheme, defaultTheme } from '@medly-components/theme';
import React from 'react';
import Link from '../Link';
import { BreadCrumbs } from './BreadCrumbs';

export const ThemeInterface: React.SFC<BreadCrumbsTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.breadCrumbs
};

export const Basic = () => (
    <BreadCrumbs>
        <Link href="#">Covered Entities</Link>
        <Link href="#">Add New Entities</Link>
    </BreadCrumbs>
);
