import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning324LineIconSvg from '../../assets/GSDD/Warning_324_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning324LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning324LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning324LineIcon.Style = SvgIcon;
Warning324LineIcon.displayName = 'Warning324LineIcon';

export default Warning324LineIcon
