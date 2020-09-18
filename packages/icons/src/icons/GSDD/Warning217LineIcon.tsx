import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning217LineIconSvg from '../../assets/GSDD/Warning_217_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning217LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning217LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning217LineIcon.Style = SvgIcon;
Warning217LineIcon.displayName = 'Warning217LineIcon';

export default Warning217LineIcon
