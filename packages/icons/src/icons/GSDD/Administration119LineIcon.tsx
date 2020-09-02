import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration119LineIconSvg from '../../assets/GSDD/Administration_119_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration119LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration119LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration119LineIcon.Style = SvgIcon;
Administration119LineIcon.displayName = 'Administration119LineIcon';

export default Administration119LineIcon
