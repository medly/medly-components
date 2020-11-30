import { BreadcrumbTheme, defaultTheme } from '@medly-components/theme';
import React from 'react';
import Link from '../Link';
import { Breadcrumb } from './Breadcrumb';

export const ThemeInterface: React.FC<BreadcrumbTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.breadcrumb
};

export const Basic = () => (
    <Breadcrumb>
        <Link href="#">Covered Entities</Link>
        <Link href="#">Add New Entities</Link>
    </Breadcrumb>
);
