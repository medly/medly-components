import HiddenCss from './HiddenCss';
import HiddenJs from './HiddenJs';
import { ImplementationProps } from './types';
import type { FC } from 'react';
import { memo } from 'react';
export const Hidden: FC<ImplementationProps> = memo(({ implementation, ...other }) =>
    implementation === 'js' ? <HiddenJs {...other} /> : <HiddenCss {...other} />
);

Hidden.displayName = 'Hidden';
Hidden.defaultProps = {
    implementation: 'js'
};
