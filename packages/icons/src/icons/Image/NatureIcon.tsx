import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NatureIconSvg from '../../assets/Image/nature_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NatureIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NatureIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NatureIcon.Style = SvgIcon;
NatureIcon.displayName = 'NatureIcon';

export default NatureIcon
