import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning335LineIconSvg from '../../assets/GSDD/Warning_335_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning335LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning335LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning335LineIcon.Style = SvgIcon;
Warning335LineIcon.displayName = 'Warning335LineIcon';

export default Warning335LineIcon
