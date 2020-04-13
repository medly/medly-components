import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Forward5IconSvg from '../../assets/Media/forward_5_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Forward5Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Forward5IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Forward5Icon.Style = SvgIcon;
Forward5Icon.displayName = 'Forward5Icon';

export default Forward5Icon
