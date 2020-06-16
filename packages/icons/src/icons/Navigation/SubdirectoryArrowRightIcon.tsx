import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SubdirectoryArrowRightIconSvg from '../../assets/Navigation/subdirectory_arrow_right_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SubdirectoryArrowRightIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SubdirectoryArrowRightIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SubdirectoryArrowRightIcon.Style = SvgIcon;
SubdirectoryArrowRightIcon.displayName = 'SubdirectoryArrowRightIcon';

export default SubdirectoryArrowRightIcon
