import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning36LineIconSvg from '../../assets/GSDD/Warning_36_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning36LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning36LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning36LineIcon.Style = SvgIcon;
Warning36LineIcon.displayName = 'Warning36LineIcon';

export default Warning36LineIcon
