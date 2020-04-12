import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ClearIconSvg from '../assets/Clear.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const ClearIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ClearIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ClearIcon.Style = SvgIcon;
ClearIcon.displayName = 'ClearIcon';

export default ClearIcon
