import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HighQualityIconSvg from '../../assets/Media/high_quality_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HighQualityIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HighQualityIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HighQualityIcon.Style = SvgIcon;
HighQualityIcon.displayName = 'HighQualityIcon';

export default HighQualityIcon
