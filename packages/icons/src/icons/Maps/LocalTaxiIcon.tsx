import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalTaxiIconSvg from '../../assets/Maps/local_taxi_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalTaxiIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalTaxiIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalTaxiIcon.Style = SvgIcon;
LocalTaxiIcon.displayName = 'LocalTaxiIcon';

export default LocalTaxiIcon
