import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InsertEmoticonIconSvg from '../../assets/Editor/insert_emoticon_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InsertEmoticonIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <InsertEmoticonIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

InsertEmoticonIcon.Style = SvgIcon;
InsertEmoticonIcon.displayName = 'InsertEmoticonIcon';

export default InsertEmoticonIcon
