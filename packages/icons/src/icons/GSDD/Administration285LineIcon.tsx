import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration285LineIconSvg from '../../assets/GSDD/Administration_285_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration285LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration285LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration285LineIcon.Style = SvgIcon;
Administration285LineIcon.displayName = 'Administration285LineIcon';

export default Administration285LineIcon
