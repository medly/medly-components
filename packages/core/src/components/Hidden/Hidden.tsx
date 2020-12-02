import * as React from 'react';
import HiddenCss from './HiddenCss';
import HiddenJs from './HiddenJs';
import { ImplementationProps } from './types';

export const Hidden: React.FC<ImplementationProps> = React.memo(({ implementation, ...other }) =>
    implementation === 'js' ? <HiddenJs {...other} /> : <HiddenCss {...other} />
);

Hidden.displayName = 'Hidden';
Hidden.defaultProps = {
    implementation: 'js'
};
