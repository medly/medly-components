import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PublicIconSvg from '../../assets/Social/public_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PublicIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PublicIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PublicIcon.Style = SvgIcon;
PublicIcon.displayName = 'PublicIcon';

export default PublicIcon
