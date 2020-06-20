import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LinkIconSvg from '../../assets/Content/link_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LinkIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LinkIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LinkIcon.Style = SvgIcon;
LinkIcon.displayName = 'LinkIcon';

export default LinkIcon
