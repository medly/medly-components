import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration311LineIconSvg from '../../assets/GSDD/Administration_311_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration311LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration311LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration311LineIcon.Style = SvgIcon;
Administration311LineIcon.displayName = 'Administration311LineIcon';

export default Administration311LineIcon
