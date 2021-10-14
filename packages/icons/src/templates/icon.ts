export const iconTemplate = (iconName: string, assetPath: string) => `import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ${iconName}Svg from '${assetPath}';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <${iconName}Svg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = '${iconName}';

const ${iconName}: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default ${iconName};
`;
