import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BrokenImageIconSvg from '../../assets/Image/broken_image_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BrokenImageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <BrokenImageIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

BrokenImageIcon.Style = SvgIcon;
BrokenImageIcon.displayName = 'BrokenImageIcon';

export default BrokenImageIcon
