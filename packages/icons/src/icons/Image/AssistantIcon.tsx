import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AssistantIconSvg from '../../assets/Image/assistant_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssistantIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <AssistantIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

AssistantIcon.Style = SvgIcon;
AssistantIcon.displayName = 'AssistantIcon';

export default AssistantIcon
