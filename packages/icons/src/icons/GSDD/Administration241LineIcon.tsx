import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration241LineIconSvg from '../../assets/GSDD/Administration_241_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration241LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration241LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration241LineIcon.Style = SvgIcon;
Administration241LineIcon.displayName = 'Administration241LineIcon';

export default Administration241LineIcon
