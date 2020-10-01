import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration329LineIconSvg from '../../assets/GSDD/Administration_329_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration329LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration329LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration329LineIcon.Style = SvgIcon;
Administration329LineIcon.displayName = 'Administration329LineIcon';

export default Administration329LineIcon
