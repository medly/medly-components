import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration110LineIconSvg from '../../assets/GSDD/Administration_110_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration110LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration110LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration110LineIcon.Style = SvgIcon;
Administration110LineIcon.displayName = 'Administration110LineIcon';

export default Administration110LineIcon
