import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BackspaceIconSvg from '../../assets/Content/backspace_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BackspaceIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BackspaceIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BackspaceIcon.Style = SvgIcon;
BackspaceIcon.displayName = 'BackspaceIcon';

export default BackspaceIcon
