import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InfoCircleIconSvg from '../../assets/Forms/InfoCircle.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InfoCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <InfoCircleIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

InfoCircleIcon.Style = SvgIcon;
InfoCircleIcon.displayName = 'InfoCircleIcon';

export default InfoCircleIcon
