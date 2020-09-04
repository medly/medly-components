import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning110LineIconSvg from '../../assets/GSDD/Warning_110_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning110LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning110LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning110LineIcon.Style = SvgIcon;
Warning110LineIcon.displayName = 'Warning110LineIcon';

export default Warning110LineIcon
