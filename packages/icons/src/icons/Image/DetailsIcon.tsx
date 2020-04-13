import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DetailsIconSvg from '../../assets/Image/details_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DetailsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DetailsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DetailsIcon.Style = SvgIcon;
DetailsIcon.displayName = 'DetailsIcon';

export default DetailsIcon
