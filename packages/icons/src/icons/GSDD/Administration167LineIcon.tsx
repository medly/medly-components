import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration167LineIconSvg from '../../assets/GSDD/Administration_167_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration167LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration167LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration167LineIcon.Style = SvgIcon;
Administration167LineIcon.displayName = 'Administration167LineIcon';

export default Administration167LineIcon
