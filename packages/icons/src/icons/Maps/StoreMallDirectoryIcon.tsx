import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import StoreMallDirectoryIconSvg from '../../assets/Maps/store_mall_directory_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StoreMallDirectoryIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'StoreMallDirectoryIcon';

const StoreMallDirectoryIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default StoreMallDirectoryIcon;
