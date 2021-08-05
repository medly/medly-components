import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CaretDoubleDownIconSvg from '../../assets/Action/caret_double_down.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CaretDoubleDownIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CaretDoubleDownIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CaretDoubleDownIcon.Style = SvgIcon;
CaretDoubleDownIcon.displayName = 'CaretDoubleDownIcon';

export default CaretDoubleDownIcon
