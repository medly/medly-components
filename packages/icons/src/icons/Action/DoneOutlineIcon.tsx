import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DoneOutlineIconSvg from '../../assets/Action/done_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DoneOutlineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DoneOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DoneOutlineIcon.Style = SvgIcon;
DoneOutlineIcon.displayName = 'DoneOutlineIcon';

export default DoneOutlineIcon
