import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalAtmIconSvg from '../../assets/Maps/local_atm_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalAtmIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalAtmIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalAtmIcon.Style = SvgIcon;
LocalAtmIcon.displayName = 'LocalAtmIcon';

export default LocalAtmIcon
