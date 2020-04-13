import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatAlignLeftIconSvg from '../../assets/Editor/format_align_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatAlignLeftIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatAlignLeftIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatAlignLeftIcon.Style = SvgIcon;
FormatAlignLeftIcon.displayName = 'FormatAlignLeftIcon';

export default FormatAlignLeftIcon
