import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InfoIconSvg from '../../assets/Action/info_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InfoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <InfoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

InfoIcon.Style = SvgIcon;
InfoIcon.displayName = 'InfoIcon';

export default InfoIcon
