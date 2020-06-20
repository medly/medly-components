import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CategoryIconSvg from '../../assets/Maps/category_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CategoryIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CategoryIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CategoryIcon.Style = SvgIcon;
CategoryIcon.displayName = 'CategoryIcon';

export default CategoryIcon
