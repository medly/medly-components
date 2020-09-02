import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration256LineIconSvg from '../../assets/GSDD/Administration_256_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration256LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration256LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration256LineIcon.Style = SvgIcon;
Administration256LineIcon.displayName = 'Administration256LineIcon';

export default Administration256LineIcon
