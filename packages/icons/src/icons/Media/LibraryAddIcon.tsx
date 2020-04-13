import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LibraryAddIconSvg from '../../assets/Media/library_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LibraryAddIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LibraryAddIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LibraryAddIcon.Style = SvgIcon;
LibraryAddIcon.displayName = 'LibraryAddIcon';

export default LibraryAddIcon
