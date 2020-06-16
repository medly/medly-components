import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DeleteOutlineIconSvg from '../../assets/Action/delete_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeleteOutlineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DeleteOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DeleteOutlineIcon.Style = SvgIcon;
DeleteOutlineIcon.displayName = 'DeleteOutlineIcon';

export default DeleteOutlineIcon
