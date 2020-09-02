import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning37LineIconSvg from '../../assets/GSDD/Warning_37_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning37LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning37LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning37LineIcon.Style = SvgIcon;
Warning37LineIcon.displayName = 'Warning37LineIcon';

export default Warning37LineIcon
