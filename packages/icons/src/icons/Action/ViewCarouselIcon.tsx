import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewCarouselIconSvg from '../../assets/Action/view_carousel_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewCarouselIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ViewCarouselIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ViewCarouselIcon.Style = SvgIcon;
ViewCarouselIcon.displayName = 'ViewCarouselIcon';

export default ViewCarouselIcon
