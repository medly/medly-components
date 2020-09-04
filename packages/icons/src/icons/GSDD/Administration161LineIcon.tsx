import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration161LineIconSvg from '../../assets/GSDD/Administration_161_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration161LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration161LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration161LineIcon.Style = SvgIcon;
Administration161LineIcon.displayName = 'Administration161LineIcon';

export default Administration161LineIcon
