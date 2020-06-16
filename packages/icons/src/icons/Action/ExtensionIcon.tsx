import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ExtensionIconSvg from '../../assets/Action/extension_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExtensionIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExtensionIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ExtensionIcon.Style = SvgIcon;
ExtensionIcon.displayName = 'ExtensionIcon';

export default ExtensionIcon
