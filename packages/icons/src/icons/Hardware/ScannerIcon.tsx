import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ScannerIconSvg from '../../assets/Hardware/scanner_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScannerIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ScannerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ScannerIcon.Style = SvgIcon;
ScannerIcon.displayName = 'ScannerIcon';

export default ScannerIcon
