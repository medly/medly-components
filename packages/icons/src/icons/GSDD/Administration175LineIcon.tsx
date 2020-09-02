import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration175LineIconSvg from '../../assets/GSDD/Administration_175_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration175LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration175LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration175LineIcon.Style = SvgIcon;
Administration175LineIcon.displayName = 'Administration175LineIcon';

export default Administration175LineIcon
