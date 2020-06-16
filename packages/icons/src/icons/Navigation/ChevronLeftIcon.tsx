import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ChevronLeftIconSvg from '../../assets/Navigation/chevron_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChevronLeftIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ChevronLeftIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ChevronLeftIcon.Style = SvgIcon;
ChevronLeftIcon.displayName = 'ChevronLeftIcon';

export default ChevronLeftIcon
