import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PublishIconSvg from '../../assets/Editor/publish_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PublishIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PublishIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PublishIcon.Style = SvgIcon;
PublishIcon.displayName = 'PublishIcon';

export default PublishIcon
