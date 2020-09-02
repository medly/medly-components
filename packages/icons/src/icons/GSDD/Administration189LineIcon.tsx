import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration189LineIconSvg from '../../assets/GSDD/Administration_189_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration189LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration189LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration189LineIcon.Style = SvgIcon;
Administration189LineIcon.displayName = 'Administration189LineIcon';

export default Administration189LineIcon
