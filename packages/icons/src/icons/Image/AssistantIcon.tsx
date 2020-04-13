import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AssistantIconSvg from '../../assets/Image/assistant_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AssistantIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AssistantIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AssistantIcon.Style = SvgIcon;
AssistantIcon.displayName = 'AssistantIcon';

export default AssistantIcon
