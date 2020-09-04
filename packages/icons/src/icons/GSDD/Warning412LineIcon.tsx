import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning412LineIconSvg from '../../assets/GSDD/Warning_412_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning412LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning412LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning412LineIcon.Style = SvgIcon;
Warning412LineIcon.displayName = 'Warning412LineIcon';

export default Warning412LineIcon
