import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FindReplaceIconSvg from '../../assets/Action/find_replace_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FindReplaceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <FindReplaceIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

FindReplaceIcon.Style = SvgIcon;
FindReplaceIcon.displayName = 'FindReplaceIcon';

export default FindReplaceIcon
