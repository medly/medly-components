import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AirlineSeatIndividualSuiteIconSvg from '../../assets/Notification/airline_seat_individual_suite_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AirlineSeatIndividualSuiteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirlineSeatIndividualSuiteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AirlineSeatIndividualSuiteIcon.Style = SvgIcon;
AirlineSeatIndividualSuiteIcon.displayName = 'AirlineSeatIndividualSuiteIcon';

export default AirlineSeatIndividualSuiteIcon
