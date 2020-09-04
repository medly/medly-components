import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning322LineIconSvg from '../../assets/GSDD/Warning_322_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning322LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning322LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning322LineIcon.Style = SvgIcon;
Warning322LineIcon.displayName = 'Warning322LineIcon';

export default Warning322LineIcon
