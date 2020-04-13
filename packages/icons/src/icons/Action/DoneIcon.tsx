import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DoneIconSvg from '../../assets/Action/done_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DoneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DoneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DoneIcon.Style = SvgIcon;
DoneIcon.displayName = 'DoneIcon';

export default DoneIcon
