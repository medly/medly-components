import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration224LineIconSvg from '../../assets/GSDD/Administration_224_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration224LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration224LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration224LineIcon.Style = SvgIcon;
Administration224LineIcon.displayName = 'Administration224LineIcon';

export default Administration224LineIcon
