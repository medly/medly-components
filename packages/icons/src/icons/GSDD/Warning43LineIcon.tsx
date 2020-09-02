import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning43LineIconSvg from '../../assets/GSDD/Warning_43_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning43LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning43LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning43LineIcon.Style = SvgIcon;
Warning43LineIcon.displayName = 'Warning43LineIcon';

export default Warning43LineIcon
