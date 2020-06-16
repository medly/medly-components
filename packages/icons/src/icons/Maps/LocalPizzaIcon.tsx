import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalPizzaIconSvg from '../../assets/Maps/local_pizza_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalPizzaIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalPizzaIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalPizzaIcon.Style = SvgIcon;
LocalPizzaIcon.displayName = 'LocalPizzaIcon';

export default LocalPizzaIcon
