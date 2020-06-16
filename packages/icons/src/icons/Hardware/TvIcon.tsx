import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TvIconSvg from '../../assets/Hardware/tv_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TvIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TvIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TvIcon.Style = SvgIcon;
TvIcon.displayName = 'TvIcon';

export default TvIcon
