import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning179LineIconSvg from '../../assets/GSDD/Warning_179_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning179LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning179LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning179LineIcon.Style = SvgIcon;
Warning179LineIcon.displayName = 'Warning179LineIcon';

export default Warning179LineIcon
