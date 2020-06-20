import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ShareIconSvg from '../../assets/Social/share_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShareIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ShareIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ShareIcon.Style = SvgIcon;
ShareIcon.displayName = 'ShareIcon';

export default ShareIcon
