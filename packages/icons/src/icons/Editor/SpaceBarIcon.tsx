import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SpaceBarIconSvg from '../../assets/Editor/space_bar_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SpaceBarIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SpaceBarIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SpaceBarIcon.Style = SvgIcon;
SpaceBarIcon.displayName = 'SpaceBarIcon';

export default SpaceBarIcon
