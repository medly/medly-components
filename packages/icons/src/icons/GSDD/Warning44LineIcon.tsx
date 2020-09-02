import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning44LineIconSvg from '../../assets/GSDD/Warning_44_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning44LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning44LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning44LineIcon.Style = SvgIcon;
Warning44LineIcon.displayName = 'Warning44LineIcon';

export default Warning44LineIcon
