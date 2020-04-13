import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Media4kIconSvg from '../../assets/Media/media_4k_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Media4kIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Media4kIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Media4kIcon.Style = SvgIcon;
Media4kIcon.displayName = 'Media4kIcon';

export default Media4kIcon
