import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalMallIconSvg from '../../assets/Maps/local_mall_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalMallIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalMallIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalMallIcon.Style = SvgIcon;
LocalMallIcon.displayName = 'LocalMallIcon';

export default LocalMallIcon
