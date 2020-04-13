import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DescriptionIconSvg from '../../assets/Action/description_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DescriptionIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DescriptionIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DescriptionIcon.Style = SvgIcon;
DescriptionIcon.displayName = 'DescriptionIcon';

export default DescriptionIcon
