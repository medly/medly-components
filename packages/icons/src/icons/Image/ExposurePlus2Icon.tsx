import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ExposurePlus2IconSvg from '../../assets/Image/exposure_plus_2_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExposurePlus2Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ExposurePlus2IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ExposurePlus2Icon.Style = SvgIcon;
ExposurePlus2Icon.displayName = 'ExposurePlus2Icon';

export default ExposurePlus2Icon
