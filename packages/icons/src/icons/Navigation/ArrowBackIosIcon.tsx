import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowBackIosIconSvg from '../../assets/Navigation/arrow_back_ios_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowBackIosIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ArrowBackIosIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ArrowBackIosIcon.Style = SvgIcon;
ArrowBackIosIcon.displayName = 'ArrowBackIosIcon';

export default ArrowBackIosIcon
