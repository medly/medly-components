import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning255LineIconSvg from '../../assets/GSDD/Warning_255_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning255LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning255LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning255LineIcon.Style = SvgIcon;
Warning255LineIcon.displayName = 'Warning255LineIcon';

export default Warning255LineIcon
