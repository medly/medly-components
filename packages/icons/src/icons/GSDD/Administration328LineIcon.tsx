import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration328LineIconSvg from '../../assets/GSDD/Administration_328_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration328LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration328LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration328LineIcon.Style = SvgIcon;
Administration328LineIcon.displayName = 'Administration328LineIcon';

export default Administration328LineIcon
