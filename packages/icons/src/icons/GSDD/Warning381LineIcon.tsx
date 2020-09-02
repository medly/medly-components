import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning381LineIconSvg from '../../assets/GSDD/Warning_381_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning381LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning381LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning381LineIcon.Style = SvgIcon;
Warning381LineIcon.displayName = 'Warning381LineIcon';

export default Warning381LineIcon
