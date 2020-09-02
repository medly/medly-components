import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning361LineIconSvg from '../../assets/GSDD/Warning_361_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning361LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning361LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning361LineIcon.Style = SvgIcon;
Warning361LineIcon.displayName = 'Warning361LineIcon';

export default Warning361LineIcon
