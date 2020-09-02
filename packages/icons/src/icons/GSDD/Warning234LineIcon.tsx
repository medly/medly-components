import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning234LineIconSvg from '../../assets/GSDD/Warning_234_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning234LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning234LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning234LineIcon.Style = SvgIcon;
Warning234LineIcon.displayName = 'Warning234LineIcon';

export default Warning234LineIcon
