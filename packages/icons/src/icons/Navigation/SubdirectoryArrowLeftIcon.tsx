import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SubdirectoryArrowLeftIconSvg from '../../assets/Navigation/subdirectory_arrow_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SubdirectoryArrowLeftIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SubdirectoryArrowLeftIcon';

const SubdirectoryArrowLeftIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SubdirectoryArrowLeftIcon;
