import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CollectionsBookmarkIconSvg from '../../assets/Image/collections_bookmark_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CollectionsBookmarkIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CollectionsBookmarkIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CollectionsBookmarkIcon.Style = SvgIcon;
CollectionsBookmarkIcon.displayName = 'CollectionsBookmarkIcon';

export default CollectionsBookmarkIcon
