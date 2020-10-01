import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration404LineIconSvg from '../../assets/GSDD/Administration_404_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration404LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration404LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration404LineIcon.Style = SvgIcon;
Administration404LineIcon.displayName = 'Administration404LineIcon';

export default Administration404LineIcon
