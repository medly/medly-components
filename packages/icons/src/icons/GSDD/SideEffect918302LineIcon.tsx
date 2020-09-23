import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect918302LineIconSvg from '../../assets/GSDD/SideEffect_918_302_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect918302LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect918302LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect918302LineIcon.Style = SvgIcon;
SideEffect918302LineIcon.displayName = 'SideEffect918302LineIcon';

export default SideEffect918302LineIcon
