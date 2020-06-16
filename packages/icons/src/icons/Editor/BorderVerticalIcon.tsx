import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BorderVerticalIconSvg from '../../assets/Editor/border_vertical_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderVerticalIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BorderVerticalIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BorderVerticalIcon.Style = SvgIcon;
BorderVerticalIcon.displayName = 'BorderVerticalIcon';

export default BorderVerticalIcon
