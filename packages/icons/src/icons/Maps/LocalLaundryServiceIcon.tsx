import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalLaundryServiceIconSvg from '../../assets/Maps/local_laundry_service_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalLaundryServiceIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalLaundryServiceIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalLaundryServiceIcon.Style = SvgIcon;
LocalLaundryServiceIcon.displayName = 'LocalLaundryServiceIcon';

export default LocalLaundryServiceIcon
