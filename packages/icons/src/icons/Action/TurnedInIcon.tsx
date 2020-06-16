import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TurnedInIconSvg from '../../assets/Action/turned_in_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TurnedInIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TurnedInIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TurnedInIcon.Style = SvgIcon;
TurnedInIcon.displayName = 'TurnedInIcon';

export default TurnedInIcon
