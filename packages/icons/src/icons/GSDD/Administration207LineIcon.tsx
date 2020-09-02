import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration207LineIconSvg from '../../assets/GSDD/Administration_207_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration207LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration207LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration207LineIcon.Style = SvgIcon;
Administration207LineIcon.displayName = 'Administration207LineIcon';

export default Administration207LineIcon
