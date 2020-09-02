import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning369LineIconSvg from '../../assets/GSDD/Warning_369_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning369LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning369LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning369LineIcon.Style = SvgIcon;
Warning369LineIcon.displayName = 'Warning369LineIcon';

export default Warning369LineIcon
