import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PetsIconSvg from '../../assets/Action/pets_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PetsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PetsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PetsIcon.Style = SvgIcon;
PetsIcon.displayName = 'PetsIcon';

export default PetsIcon
