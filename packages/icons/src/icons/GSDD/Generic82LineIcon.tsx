import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Generic82LineIconSvg from '../../assets/GSDD/Generic_82_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Generic82LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Generic82LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Generic82LineIcon.Style = SvgIcon;
Generic82LineIcon.displayName = 'Generic82LineIcon';

export default Generic82LineIcon
