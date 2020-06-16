import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ArrowUpwardIconSvg from '../../assets/Navigation/arrow_upward_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowUpwardIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowUpwardIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArrowUpwardIcon.Style = SvgIcon;
ArrowUpwardIcon.displayName = 'ArrowUpwardIcon';

export default ArrowUpwardIcon
