import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning176LineIconSvg from '../../assets/GSDD/Warning_176_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning176LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning176LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning176LineIcon.Style = SvgIcon;
Warning176LineIcon.displayName = 'Warning176LineIcon';

export default Warning176LineIcon
