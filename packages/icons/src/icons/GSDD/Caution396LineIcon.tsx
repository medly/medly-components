import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Caution396LineIconSvg from '../../assets/GSDD/Caution_396_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Caution396LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Caution396LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Caution396LineIcon.Style = SvgIcon;
Caution396LineIcon.displayName = 'Caution396LineIcon';

export default Caution396LineIcon
