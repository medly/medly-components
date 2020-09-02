import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning370LineIconSvg from '../../assets/GSDD/Warning_370_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning370LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning370LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning370LineIcon.Style = SvgIcon;
Warning370LineIcon.displayName = 'Warning370LineIcon';

export default Warning370LineIcon
