import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning250LineIconSvg from '../../assets/GSDD/Warning_250_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning250LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning250LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning250LineIcon.Style = SvgIcon;
Warning250LineIcon.displayName = 'Warning250LineIcon';

export default Warning250LineIcon
