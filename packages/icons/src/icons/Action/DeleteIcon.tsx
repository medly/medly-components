import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DeleteIconSvg from '../../assets/Action/delete_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeleteIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DeleteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DeleteIcon.Style = SvgIcon;
DeleteIcon.displayName = 'DeleteIcon';

export default DeleteIcon
