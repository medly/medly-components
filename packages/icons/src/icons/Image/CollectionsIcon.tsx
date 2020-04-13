import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CollectionsIconSvg from '../../assets/Image/collections_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CollectionsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CollectionsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CollectionsIcon.Style = SvgIcon;
CollectionsIcon.displayName = 'CollectionsIcon';

export default CollectionsIcon
