import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration265LineIconSvg from '../../assets/GSDD/Administration_265_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration265LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration265LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration265LineIcon.Style = SvgIcon;
Administration265LineIcon.displayName = 'Administration265LineIcon';

export default Administration265LineIcon
