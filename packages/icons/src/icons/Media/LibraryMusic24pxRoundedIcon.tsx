import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LibraryMusic24pxRoundedIconSvg from '../../assets/Media/library_music24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LibraryMusic24pxRoundedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'LibraryMusic24pxRoundedIcon';

const LibraryMusic24pxRoundedIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default LibraryMusic24pxRoundedIcon;
