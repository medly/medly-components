import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CreateIconSvg from '../../assets/Content/create_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CreateIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CreateIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CreateIcon.Style = SvgIcon;
CreateIcon.displayName = 'CreateIcon';

export default CreateIcon
