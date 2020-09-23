import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration288LineIconSvg from '../../assets/GSDD/Administration_288_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration288LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration288LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration288LineIcon.Style = SvgIcon;
Administration288LineIcon.displayName = 'Administration288LineIcon';

export default Administration288LineIcon
