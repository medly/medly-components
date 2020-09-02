import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning267LineIconSvg from '../../assets/GSDD/Warning_267_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning267LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning267LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning267LineIcon.Style = SvgIcon;
Warning267LineIcon.displayName = 'Warning267LineIcon';

export default Warning267LineIcon
