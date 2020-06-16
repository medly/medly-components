import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ExplicitIconSvg from '../../assets/Media/explicit_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExplicitIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExplicitIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ExplicitIcon.Style = SvgIcon;
ExplicitIcon.displayName = 'ExplicitIcon';

export default ExplicitIcon
