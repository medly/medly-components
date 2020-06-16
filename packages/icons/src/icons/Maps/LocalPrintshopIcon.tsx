import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalPrintshopIconSvg from '../../assets/Maps/local_printshop_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalPrintshopIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalPrintshopIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalPrintshopIcon.Style = SvgIcon;
LocalPrintshopIcon.displayName = 'LocalPrintshopIcon';

export default LocalPrintshopIcon
