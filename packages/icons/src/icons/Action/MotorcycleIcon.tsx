import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MotorcycleIconSvg from '../../assets/Action/motorcycle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MotorcycleIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MotorcycleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MotorcycleIcon.Style = SvgIcon;
MotorcycleIcon.displayName = 'MotorcycleIcon';

export default MotorcycleIcon
