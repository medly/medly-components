import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ExposurePlus1IconSvg from '../../assets/Image/exposure_plus_1_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExposurePlus1IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'ExposurePlus1Icon';

const ExposurePlus1Icon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default ExposurePlus1Icon
