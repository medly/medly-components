import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BeenhereIconSvg from '../../assets/Maps/beenhere_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BeenhereIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BeenhereIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BeenhereIcon.Style = SvgIcon;
BeenhereIcon.displayName = 'BeenhereIcon';

export default BeenhereIcon
