import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NearMeIconSvg from '../../assets/Maps/near_me_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NearMeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NearMeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NearMeIcon.Style = SvgIcon;
NearMeIcon.displayName = 'NearMeIcon';

export default NearMeIcon
