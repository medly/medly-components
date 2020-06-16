import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NotesIconSvg from '../../assets/Editor/notes_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NotesIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NotesIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NotesIcon.Style = SvgIcon;
NotesIcon.displayName = 'NotesIcon';

export default NotesIcon
