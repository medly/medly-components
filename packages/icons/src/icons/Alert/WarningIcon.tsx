import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningIconSvg from '../../assets/Alert/warning_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningIcon.Style = SvgIcon;
WarningIcon.displayName = 'WarningIcon';

export default WarningIcon
