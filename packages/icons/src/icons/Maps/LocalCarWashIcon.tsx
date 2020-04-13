import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalCarWashIconSvg from '../../assets/Maps/local_car_wash_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalCarWashIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalCarWashIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalCarWashIcon.Style = SvgIcon;
LocalCarWashIcon.displayName = 'LocalCarWashIcon';

export default LocalCarWashIcon
