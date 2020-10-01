import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration298LineIconSvg from '../../assets/GSDD/Administration_298_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration298LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration298LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration298LineIcon.Style = SvgIcon;
Administration298LineIcon.displayName = 'Administration298LineIcon';

export default Administration298LineIcon
