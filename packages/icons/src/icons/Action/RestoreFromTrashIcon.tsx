import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import RestoreFromTrashIconSvg from '../../assets/Action/restore_from_trash_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RestoreFromTrashIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RestoreFromTrashIcon';

const RestoreFromTrashIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default RestoreFromTrashIcon;
