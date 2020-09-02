import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Generic85LineIconSvg from '../../assets/GSDD/Generic_85_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Generic85LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Generic85LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Generic85LineIcon.Style = SvgIcon;
Generic85LineIcon.displayName = 'Generic85LineIcon';

export default Generic85LineIcon
