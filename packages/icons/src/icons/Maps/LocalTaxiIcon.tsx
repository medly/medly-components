import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalTaxiIconSvg from '../../assets/Maps/local_taxi_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalTaxiIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalTaxiIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalTaxiIcon.Style = SvgIcon;
LocalTaxiIcon.displayName = 'LocalTaxiIcon';

export default LocalTaxiIcon
