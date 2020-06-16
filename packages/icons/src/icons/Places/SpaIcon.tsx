import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SpaIconSvg from '../../assets/Places/spa_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SpaIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SpaIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SpaIcon.Style = SvgIcon;
SpaIcon.displayName = 'SpaIcon';

export default SpaIcon
