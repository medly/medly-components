import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TagFacesIconSvg from '../../assets/Image/tag_faces_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TagFacesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TagFacesIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TagFacesIcon.Style = SvgIcon;
TagFacesIcon.displayName = 'TagFacesIcon';

export default TagFacesIcon
