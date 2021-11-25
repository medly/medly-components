import { defaultTheme, LinkTheme } from '@medly-components/theme';
import { Link } from './Link';
import type { FC } from 'react';

export const ThemeInterface: FC<LinkTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.link
};

export const Basic = () => <Link href="#">Add New Pharmacy</Link>;
