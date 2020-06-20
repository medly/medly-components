import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ViewColumnIconSvg from '../../assets/Action/view_column_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewColumnIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ViewColumnIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ViewColumnIcon.Style = SvgIcon;
ViewColumnIcon.displayName = 'ViewColumnIcon';

export default ViewColumnIcon
