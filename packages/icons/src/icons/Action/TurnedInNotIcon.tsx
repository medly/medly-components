import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TurnedInNotIconSvg from '../../assets/Action/turned_in_not_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TurnedInNotIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TurnedInNotIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TurnedInNotIcon.Style = SvgIcon;
TurnedInNotIcon.displayName = 'TurnedInNotIcon';

export default TurnedInNotIcon
