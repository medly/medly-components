import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DoneAllIconSvg from '../../assets/Action/done_all_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DoneAllIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DoneAllIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DoneAllIcon.Style = SvgIcon;
DoneAllIcon.displayName = 'DoneAllIcon';

export default DoneAllIcon
