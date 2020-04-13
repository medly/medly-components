import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ControlPointDuplicateIconSvg from '../../assets/Image/control_point_duplicate_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ControlPointDuplicateIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ControlPointDuplicateIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ControlPointDuplicateIcon.Style = SvgIcon;
ControlPointDuplicateIcon.displayName = 'ControlPointDuplicateIcon';

export default ControlPointDuplicateIcon
