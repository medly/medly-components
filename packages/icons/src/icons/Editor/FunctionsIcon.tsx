import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FunctionsIconSvg from '../../assets/Editor/functions_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FunctionsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FunctionsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FunctionsIcon.Style = SvgIcon;
FunctionsIcon.displayName = 'FunctionsIcon';

export default FunctionsIcon
