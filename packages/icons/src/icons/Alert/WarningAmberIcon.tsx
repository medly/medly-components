import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WarningAmberIconSvg from '../../assets/Alert/warning_amber_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningAmberIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningAmberIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningAmberIcon.Style = SvgIcon;
WarningAmberIcon.displayName = 'WarningAmberIcon';

export default WarningAmberIcon
