import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ExpandIconSvg from '../../assets/Action/caret_double_down.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExpandIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExpandIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ExpandIcon.Style = SvgIcon;
ExpandIcon.displayName = 'ExpandIcon';

export default ExpandIcon;
