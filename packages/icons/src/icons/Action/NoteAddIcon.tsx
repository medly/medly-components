import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NoteAddIconSvg from '../../assets/Action/note_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NoteAddIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NoteAddIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NoteAddIcon.Style = SvgIcon;
NoteAddIcon.displayName = 'NoteAddIcon';

export default NoteAddIcon
