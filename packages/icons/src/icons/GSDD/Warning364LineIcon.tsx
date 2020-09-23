import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning364LineIconSvg from '../../assets/GSDD/Warning_364_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning364LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning364LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning364LineIcon.Style = SvgIcon;
Warning364LineIcon.displayName = 'Warning364LineIcon';

export default Warning364LineIcon
