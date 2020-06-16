import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ExposurePlus2IconSvg from '../../assets/Image/exposure_plus_2_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExposurePlus2Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExposurePlus2IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ExposurePlus2Icon.Style = SvgIcon;
ExposurePlus2Icon.displayName = 'ExposurePlus2Icon';

export default ExposurePlus2Icon
