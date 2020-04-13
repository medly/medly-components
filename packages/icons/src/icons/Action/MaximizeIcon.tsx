import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MaximizeIconSvg from '../../assets/Action/maximize_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MaximizeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MaximizeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MaximizeIcon.Style = SvgIcon;
MaximizeIcon.displayName = 'MaximizeIcon';

export default MaximizeIcon
