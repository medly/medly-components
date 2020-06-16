import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import VerticalAlignCenterIconSvg from '../../assets/Editor/vertical_align_center_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VerticalAlignCenterIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VerticalAlignCenterIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

VerticalAlignCenterIcon.Style = SvgIcon;
VerticalAlignCenterIcon.displayName = 'VerticalAlignCenterIcon';

export default VerticalAlignCenterIcon
