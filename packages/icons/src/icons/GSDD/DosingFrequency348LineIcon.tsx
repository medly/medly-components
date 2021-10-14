import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DosingFrequency348LineIconSvg from '../../assets/GSDD/DosingFrequency_348_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DosingFrequency348LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'DosingFrequency348LineIcon';

const DosingFrequency348LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default DosingFrequency348LineIcon;
