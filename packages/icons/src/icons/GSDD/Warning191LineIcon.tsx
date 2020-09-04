import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning191LineIconSvg from '../../assets/GSDD/Warning_191_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning191LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning191LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning191LineIcon.Style = SvgIcon;
Warning191LineIcon.displayName = 'Warning191LineIcon';

export default Warning191LineIcon
