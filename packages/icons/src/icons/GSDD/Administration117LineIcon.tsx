import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration117LineIconSvg from '../../assets/GSDD/Administration_117_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration117LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration117LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration117LineIcon.Style = SvgIcon;
Administration117LineIcon.displayName = 'Administration117LineIcon';

export default Administration117LineIcon
