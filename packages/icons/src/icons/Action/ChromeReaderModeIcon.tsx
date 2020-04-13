import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ChromeReaderModeIconSvg from '../../assets/Action/chrome_reader_mode_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChromeReaderModeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ChromeReaderModeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ChromeReaderModeIcon.Style = SvgIcon;
ChromeReaderModeIcon.displayName = 'ChromeReaderModeIcon';

export default ChromeReaderModeIcon
