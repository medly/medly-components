import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CollectionsBookmarkIconSvg from '../../assets/Image/collections_bookmark_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CollectionsBookmarkIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CollectionsBookmarkIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CollectionsBookmarkIcon.Style = SvgIcon;
CollectionsBookmarkIcon.displayName = 'CollectionsBookmarkIcon';

export default CollectionsBookmarkIcon
