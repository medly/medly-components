import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import EjectIconSvg from '../../assets/Action/eject_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EjectIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EjectIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EjectIcon.Style = SvgIcon;
EjectIcon.displayName = 'EjectIcon';

export default EjectIcon
