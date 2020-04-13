import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RedoIconSvg from '../../assets/Content/redo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RedoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RedoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RedoIcon.Style = SvgIcon;
RedoIcon.displayName = 'RedoIcon';

export default RedoIcon
