import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning205LineIconSvg from '../../assets/GSDD/Warning_205_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning205LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning205LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning205LineIcon.Style = SvgIcon;
Warning205LineIcon.displayName = 'Warning205LineIcon';

export default Warning205LineIcon
