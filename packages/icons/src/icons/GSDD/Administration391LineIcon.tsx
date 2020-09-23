import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration391LineIconSvg from '../../assets/GSDD/Administration_391_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration391LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration391LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration391LineIcon.Style = SvgIcon;
Administration391LineIcon.displayName = 'Administration391LineIcon';

export default Administration391LineIcon
