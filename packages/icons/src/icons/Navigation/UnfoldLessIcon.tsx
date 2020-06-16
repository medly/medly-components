import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import UnfoldLessIconSvg from '../../assets/Navigation/unfold_less_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UnfoldLessIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <UnfoldLessIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

UnfoldLessIcon.Style = SvgIcon;
UnfoldLessIcon.displayName = 'UnfoldLessIcon';

export default UnfoldLessIcon
