import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalDiningIconSvg from '../../assets/Maps/local_dining_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalDiningIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalDiningIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalDiningIcon.Style = SvgIcon;
LocalDiningIcon.displayName = 'LocalDiningIcon';

export default LocalDiningIcon
