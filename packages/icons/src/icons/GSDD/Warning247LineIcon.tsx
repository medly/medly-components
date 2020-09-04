import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning247LineIconSvg from '../../assets/GSDD/Warning_247_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning247LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning247LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning247LineIcon.Style = SvgIcon;
Warning247LineIcon.displayName = 'Warning247LineIcon';

export default Warning247LineIcon
