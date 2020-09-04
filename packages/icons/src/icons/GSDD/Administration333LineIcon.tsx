import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration333LineIconSvg from '../../assets/GSDD/Administration_333_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration333LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration333LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration333LineIcon.Style = SvgIcon;
Administration333LineIcon.displayName = 'Administration333LineIcon';

export default Administration333LineIcon
