import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BorderLeftIconSvg from '../../assets/Editor/border_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderLeftIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BorderLeftIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BorderLeftIcon.Style = SvgIcon;
BorderLeftIcon.displayName = 'BorderLeftIcon';

export default BorderLeftIcon
