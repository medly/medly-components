import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NoteIconSvg from '../../assets/Media/note_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NoteIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NoteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NoteIcon.Style = SvgIcon;
NoteIcon.displayName = 'NoteIcon';

export default NoteIcon
