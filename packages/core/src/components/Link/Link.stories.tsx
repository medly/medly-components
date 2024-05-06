import { defaultTheme, LinkTheme } from '@medly-components/theme';
import type { FCC } from 'react';
import { Link } from './Link';

export const ThemeInterface: FCC<LinkTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.link
};

export const Basic = () => <Link href="#">Add New Pharmacy</Link>;
