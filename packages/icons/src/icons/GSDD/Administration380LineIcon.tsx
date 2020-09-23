import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration380LineIconSvg from '../../assets/GSDD/Administration_380_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration380LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration380LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration380LineIcon.Style = SvgIcon;
Administration380LineIcon.displayName = 'Administration380LineIcon';

export default Administration380LineIcon
