import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration358LineIconSvg from '../../assets/GSDD/Administration_358_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration358LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration358LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration358LineIcon.Style = SvgIcon;
Administration358LineIcon.displayName = 'Administration358LineIcon';

export default Administration358LineIcon
