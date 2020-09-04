import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning372LineIconSvg from '../../assets/GSDD/Warning_372_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning372LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning372LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning372LineIcon.Style = SvgIcon;
Warning372LineIcon.displayName = 'Warning372LineIcon';

export default Warning372LineIcon
