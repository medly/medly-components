import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatAlignCenterIconSvg from '../../assets/Editor/format_align_center_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatAlignCenterIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatAlignCenterIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatAlignCenterIcon.Style = SvgIcon;
FormatAlignCenterIcon.displayName = 'FormatAlignCenterIcon';

export default FormatAlignCenterIcon
