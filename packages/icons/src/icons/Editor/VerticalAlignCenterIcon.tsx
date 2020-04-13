import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VerticalAlignCenterIconSvg from '../../assets/Editor/vertical_align_center_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VerticalAlignCenterIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VerticalAlignCenterIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VerticalAlignCenterIcon.Style = SvgIcon;
VerticalAlignCenterIcon.displayName = 'VerticalAlignCenterIcon';

export default VerticalAlignCenterIcon
