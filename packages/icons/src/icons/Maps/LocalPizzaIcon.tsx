import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalPizzaIconSvg from '../../assets/Maps/local_pizza_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalPizzaIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalPizzaIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalPizzaIcon.Style = SvgIcon;
LocalPizzaIcon.displayName = 'LocalPizzaIcon';

export default LocalPizzaIcon
