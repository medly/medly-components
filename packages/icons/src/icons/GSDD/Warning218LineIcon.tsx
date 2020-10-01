import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning218LineIconSvg from '../../assets/GSDD/Warning_218_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning218LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning218LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning218LineIcon.Style = SvgIcon;
Warning218LineIcon.displayName = 'Warning218LineIcon';

export default Warning218LineIcon
