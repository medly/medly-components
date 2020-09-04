import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration124LineIconSvg from '../../assets/GSDD/Administration_124_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration124LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration124LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration124LineIcon.Style = SvgIcon;
Administration124LineIcon.displayName = 'Administration124LineIcon';

export default Administration124LineIcon
