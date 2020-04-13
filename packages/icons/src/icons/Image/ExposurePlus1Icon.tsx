import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExposurePlus1IconSvg from '../../assets/Image/exposure_plus_1_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExposurePlus1Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExposurePlus1IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExposurePlus1Icon.Style = SvgIcon;
ExposurePlus1Icon.displayName = 'ExposurePlus1Icon';

export default ExposurePlus1Icon
