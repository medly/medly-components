import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LibraryMusic24pxRoundedIconSvg from '../../assets/Media/library_music24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LibraryMusic24pxRoundedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LibraryMusic24pxRoundedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LibraryMusic24pxRoundedIcon.Style = SvgIcon;
LibraryMusic24pxRoundedIcon.displayName = 'LibraryMusic24pxRoundedIcon';

export default LibraryMusic24pxRoundedIcon
