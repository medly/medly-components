import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning56LineIconSvg from '../../assets/GSDD/Warning_56_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning56LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning56LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning56LineIcon.Style = SvgIcon;
Warning56LineIcon.displayName = 'Warning56LineIcon';

export default Warning56LineIcon
