import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SubdirectoryArrowLeftIconSvg from '../../assets/Navigation/subdirectory_arrow_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SubdirectoryArrowLeftIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SubdirectoryArrowLeftIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SubdirectoryArrowLeftIcon.Style = SvgIcon;
SubdirectoryArrowLeftIcon.displayName = 'SubdirectoryArrowLeftIcon';

export default SubdirectoryArrowLeftIcon
