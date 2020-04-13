import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ArrowLeftIconSvg from '../../assets/Navigation/arrow_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowLeftIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ArrowLeftIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ArrowLeftIcon.Style = SvgIcon;
ArrowLeftIcon.displayName = 'ArrowLeftIcon';

export default ArrowLeftIcon
