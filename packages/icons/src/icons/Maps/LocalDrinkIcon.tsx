import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalDrinkIconSvg from '../../assets/Maps/local_drink_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalDrinkIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalDrinkIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalDrinkIcon.Style = SvgIcon;
LocalDrinkIcon.displayName = 'LocalDrinkIcon';

export default LocalDrinkIcon
