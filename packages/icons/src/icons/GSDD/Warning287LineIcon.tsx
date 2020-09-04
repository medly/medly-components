import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning287LineIconSvg from '../../assets/GSDD/Warning_287_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning287LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning287LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning287LineIcon.Style = SvgIcon;
Warning287LineIcon.displayName = 'Warning287LineIcon';

export default Warning287LineIcon
