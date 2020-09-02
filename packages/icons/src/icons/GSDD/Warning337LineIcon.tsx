import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning337LineIconSvg from '../../assets/GSDD/Warning_337_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning337LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning337LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning337LineIcon.Style = SvgIcon;
Warning337LineIcon.displayName = 'Warning337LineIcon';

export default Warning337LineIcon
