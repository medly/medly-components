import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import OutlinedFlagIconSvg from '../../assets/Content/outlined_flag_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OutlinedFlagIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <OutlinedFlagIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

OutlinedFlagIcon.Style = SvgIcon;
OutlinedFlagIcon.displayName = 'OutlinedFlagIcon';

export default OutlinedFlagIcon
