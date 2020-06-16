import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import UndoIconSvg from '../../assets/Content/undo_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UndoIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <UndoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

UndoIcon.Style = SvgIcon;
UndoIcon.displayName = 'UndoIcon';

export default UndoIcon
