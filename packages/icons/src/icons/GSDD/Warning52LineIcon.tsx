import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning52LineIconSvg from '../../assets/GSDD/Warning_52_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning52LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning52LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning52LineIcon.Style = SvgIcon;
Warning52LineIcon.displayName = 'Warning52LineIcon';

export default Warning52LineIcon
