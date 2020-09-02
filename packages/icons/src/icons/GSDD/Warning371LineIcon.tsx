import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning371LineIconSvg from '../../assets/GSDD/Warning_371_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning371LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning371LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning371LineIcon.Style = SvgIcon;
Warning371LineIcon.displayName = 'Warning371LineIcon';

export default Warning371LineIcon
