import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration344LineIconSvg from '../../assets/GSDD/Administration_344_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration344LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration344LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration344LineIcon.Style = SvgIcon;
Administration344LineIcon.displayName = 'Administration344LineIcon';

export default Administration344LineIcon
