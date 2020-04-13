import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BrightnessMediumIconSvg from '../../assets/Device/brightness_medium_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BrightnessMediumIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BrightnessMediumIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BrightnessMediumIcon.Style = SvgIcon;
BrightnessMediumIcon.displayName = 'BrightnessMediumIcon';

export default BrightnessMediumIcon
