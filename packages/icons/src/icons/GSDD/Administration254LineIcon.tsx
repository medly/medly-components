import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration254LineIconSvg from '../../assets/GSDD/Administration_254_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration254LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration254LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration254LineIcon.Style = SvgIcon;
Administration254LineIcon.displayName = 'Administration254LineIcon';

export default Administration254LineIcon
