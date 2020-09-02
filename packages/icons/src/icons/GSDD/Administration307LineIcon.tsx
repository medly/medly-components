import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration307LineIconSvg from '../../assets/GSDD/Administration_307_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration307LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration307LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration307LineIcon.Style = SvgIcon;
Administration307LineIcon.displayName = 'Administration307LineIcon';

export default Administration307LineIcon
