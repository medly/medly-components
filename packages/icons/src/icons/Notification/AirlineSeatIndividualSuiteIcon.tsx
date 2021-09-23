import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AirlineSeatIndividualSuiteIconSvg from '../../assets/Notification/airline_seat_individual_suite_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AirlineSeatIndividualSuiteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'AirlineSeatIndividualSuiteIcon';

const AirlineSeatIndividualSuiteIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default AirlineSeatIndividualSuiteIcon
