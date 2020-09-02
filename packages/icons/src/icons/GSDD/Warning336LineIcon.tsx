import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning336LineIconSvg from '../../assets/GSDD/Warning_336_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning336LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning336LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning336LineIcon.Style = SvgIcon;
Warning336LineIcon.displayName = 'Warning336LineIcon';

export default Warning336LineIcon
