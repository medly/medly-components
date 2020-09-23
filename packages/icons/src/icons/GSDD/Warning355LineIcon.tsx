import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning355LineIconSvg from '../../assets/GSDD/Warning_355_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning355LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning355LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning355LineIcon.Style = SvgIcon;
Warning355LineIcon.displayName = 'Warning355LineIcon';

export default Warning355LineIcon
