import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning240LineIconSvg from '../../assets/GSDD/Warning_240_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning240LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning240LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning240LineIcon.Style = SvgIcon;
Warning240LineIcon.displayName = 'Warning240LineIcon';

export default Warning240LineIcon
