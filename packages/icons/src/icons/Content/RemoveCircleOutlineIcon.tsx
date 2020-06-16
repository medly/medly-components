import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RemoveCircleOutlineIconSvg from '../../assets/Content/remove_circle_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RemoveCircleOutlineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RemoveCircleOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RemoveCircleOutlineIcon.Style = SvgIcon;
RemoveCircleOutlineIcon.displayName = 'RemoveCircleOutlineIcon';

export default RemoveCircleOutlineIcon
