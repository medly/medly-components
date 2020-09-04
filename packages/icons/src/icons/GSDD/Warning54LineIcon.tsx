import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning54LineIconSvg from '../../assets/GSDD/Warning_54_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning54LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning54LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning54LineIcon.Style = SvgIcon;
Warning54LineIcon.displayName = 'Warning54LineIcon';

export default Warning54LineIcon
