import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration114LineIconSvg from '../../assets/GSDD/Administration_114_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration114LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration114LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration114LineIcon.Style = SvgIcon;
Administration114LineIcon.displayName = 'Administration114LineIcon';

export default Administration114LineIcon
