import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ModeIconSvg from '../../assets/Editor/mode_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ModeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ModeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ModeIcon.Style = SvgIcon;
ModeIcon.displayName = 'ModeIcon';

export default ModeIcon
