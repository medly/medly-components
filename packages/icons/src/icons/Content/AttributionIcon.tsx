import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AttributionIconSvg from '../../assets/Content/attribution_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AttributionIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AttributionIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AttributionIcon.Style = SvgIcon;
AttributionIcon.displayName = 'AttributionIcon';

export default AttributionIcon
