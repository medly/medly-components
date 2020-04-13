import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RedoIconSvg from '../../assets/Content/redo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RedoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RedoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RedoIcon.Style = SvgIcon;
RedoIcon.displayName = 'RedoIcon';

export default RedoIcon
