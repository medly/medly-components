import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning39LineIconSvg from '../../assets/GSDD/Warning_39_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning39LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning39LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning39LineIcon.Style = SvgIcon;
Warning39LineIcon.displayName = 'Warning39LineIcon';

export default Warning39LineIcon
