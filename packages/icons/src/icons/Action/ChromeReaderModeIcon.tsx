import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ChromeReaderModeIconSvg from '../../assets/Action/chrome_reader_mode_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChromeReaderModeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ChromeReaderModeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ChromeReaderModeIcon.Style = SvgIcon;
ChromeReaderModeIcon.displayName = 'ChromeReaderModeIcon';

export default ChromeReaderModeIcon
