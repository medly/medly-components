import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration118LineIconSvg from '../../assets/GSDD/Administration_118_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration118LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration118LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration118LineIcon.Style = SvgIcon;
Administration118LineIcon.displayName = 'Administration118LineIcon';

export default Administration118LineIcon
