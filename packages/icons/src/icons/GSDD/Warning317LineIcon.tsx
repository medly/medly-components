import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning317LineIconSvg from '../../assets/GSDD/Warning_317_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning317LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning317LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning317LineIcon.Style = SvgIcon;
Warning317LineIcon.displayName = 'Warning317LineIcon';

export default Warning317LineIcon
