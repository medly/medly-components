import type { FCC } from 'react';
import { memo } from 'react';
import HiddenCss from './HiddenCss';
import HiddenJs from './HiddenJs';
import { ImplementationProps } from './types';
export const Hidden: FCC<ImplementationProps> = memo(({ implementation, ...other }) =>
    implementation === 'js' ? <HiddenJs {...other} /> : <HiddenCss {...other} />
);

Hidden.displayName = 'Hidden';
Hidden.defaultProps = {
    implementation: 'js'
};
