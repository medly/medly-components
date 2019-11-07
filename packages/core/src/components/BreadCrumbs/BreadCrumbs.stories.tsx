import { BreadCrumbsTheme } from '@medly-components/theme';
import React from 'react';
import Link from '../Link';
import { BreadCrumbs } from './BreadCrumbs';

export const ThemeInterface = (props: BreadCrumbsTheme): any => null;

export const Basic = () => (
    <BreadCrumbs>
        <Link href="#">Covered Entities</Link>
        <Link href="#">Add New Entities</Link>
    </BreadCrumbs>
);
