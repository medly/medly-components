import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NavigateBeforeIconSvg from '../../assets/Image/navigate_before_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NavigateBeforeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NavigateBeforeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NavigateBeforeIcon.Style = SvgIcon;
NavigateBeforeIcon.displayName = 'NavigateBeforeIcon';

export default NavigateBeforeIcon
