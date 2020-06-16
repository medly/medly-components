import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RemoveCircleIconSvg from '../../assets/Content/remove_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RemoveCircleIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RemoveCircleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RemoveCircleIcon.Style = SvgIcon;
RemoveCircleIcon.displayName = 'RemoveCircleIcon';

export default RemoveCircleIcon
