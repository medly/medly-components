import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning42LineIconSvg from '../../assets/GSDD/Warning_42_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning42LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning42LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning42LineIcon.Style = SvgIcon;
Warning42LineIcon.displayName = 'Warning42LineIcon';

export default Warning42LineIcon
