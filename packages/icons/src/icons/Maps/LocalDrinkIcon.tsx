import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalDrinkIconSvg from '../../assets/Maps/local_drink_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalDrinkIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalDrinkIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalDrinkIcon.Style = SvgIcon;
LocalDrinkIcon.displayName = 'LocalDrinkIcon';

export default LocalDrinkIcon
