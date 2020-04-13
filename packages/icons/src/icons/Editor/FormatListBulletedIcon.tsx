import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FormatListBulletedIconSvg from '../../assets/Editor/format_list_bulleted_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatListBulletedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FormatListBulletedIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FormatListBulletedIcon.Style = SvgIcon;
FormatListBulletedIcon.displayName = 'FormatListBulletedIcon';

export default FormatListBulletedIcon
