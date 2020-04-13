import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CheckIconSvg from '../../assets/Navigation/check_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CheckIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CheckIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CheckIcon.Style = SvgIcon;
CheckIcon.displayName = 'CheckIcon';

export default CheckIcon
