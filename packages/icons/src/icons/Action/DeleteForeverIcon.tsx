import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DeleteForeverIconSvg from '../../assets/Action/delete_forever_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DeleteForeverIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DeleteForeverIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DeleteForeverIcon.Style = SvgIcon;
DeleteForeverIcon.displayName = 'DeleteForeverIcon';

export default DeleteForeverIcon
