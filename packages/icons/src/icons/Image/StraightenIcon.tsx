import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StraightenIconSvg from '../../assets/Image/straighten_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StraightenIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <StraightenIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

StraightenIcon.Style = SvgIcon;
StraightenIcon.displayName = 'StraightenIcon';

export default StraightenIcon
