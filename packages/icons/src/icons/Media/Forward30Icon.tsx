import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Forward30IconSvg from '../../assets/Media/forward_30_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Forward30Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Forward30IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Forward30Icon.Style = SvgIcon;
Forward30Icon.displayName = 'Forward30Icon';

export default Forward30Icon
