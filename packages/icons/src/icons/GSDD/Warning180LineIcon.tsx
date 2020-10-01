import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning180LineIconSvg from '../../assets/GSDD/Warning_180_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning180LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning180LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning180LineIcon.Style = SvgIcon;
Warning180LineIcon.displayName = 'Warning180LineIcon';

export default Warning180LineIcon
