import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PlaceIconSvg from '../../assets/Maps/place_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PlaceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PlaceIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PlaceIcon.Style = SvgIcon;
PlaceIcon.displayName = 'PlaceIcon';

export default PlaceIcon
