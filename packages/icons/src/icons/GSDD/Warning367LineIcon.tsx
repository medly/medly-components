import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning367LineIconSvg from '../../assets/GSDD/Warning_367_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning367LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning367LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning367LineIcon.Style = SvgIcon;
Warning367LineIcon.displayName = 'Warning367LineIcon';

export default Warning367LineIcon
