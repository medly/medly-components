import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning382LineIconSvg from '../../assets/GSDD/Warning_382_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning382LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning382LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning382LineIcon.Style = SvgIcon;
Warning382LineIcon.displayName = 'Warning382LineIcon';

export default Warning382LineIcon
