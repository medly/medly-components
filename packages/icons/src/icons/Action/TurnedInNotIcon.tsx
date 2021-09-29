import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TurnedInNotIconSvg from '../../assets/Action/turned_in_not_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TurnedInNotIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'TurnedInNotIcon';

const TurnedInNotIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default TurnedInNotIcon
