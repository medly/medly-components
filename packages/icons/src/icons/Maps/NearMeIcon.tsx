import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NearMeIconSvg from '../../assets/Maps/near_me_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NearMeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NearMeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NearMeIcon.Style = SvgIcon;
NearMeIcon.displayName = 'NearMeIcon';

export default NearMeIcon
