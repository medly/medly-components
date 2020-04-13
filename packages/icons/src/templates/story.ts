export const storyTemplate = (icons: { [k: string]: string[] }) => {
    const imports = Object.keys(icons)
        .map(DIR => icons[DIR].map(iconName => `import ${iconName} from './icons/${DIR}${iconName}';`).join('\n'))
        .join('');

    const iconComponents = (iconNames: string[]) =>
        iconNames
            .map(
                name =>
                    `<${name} 
                size={select('Size', sizes, 'M')} 
                color={color('Color', defaultColor)} 
                disabled={boolean('Disabled', false)} 
            />`
            )
            .join('\n            ');

    const preview = Object.keys(icons).map(
        DIR => `### ${DIR.slice(0, -1)}
<Preview withToolbar>
    <Story name="${DIR.slice(0, -1)}" parameters={{ decorators: [withKnobs] }}>
        <IconContainer>
            ${iconComponents(icons[DIR])}
        </IconContainer>
    </Story>
</Preview>`
    );

    return `import { HTMLProps } from '@medly-components/utils';
import SvgIcon from './SvgIcon';
import { action } from '@storybook/addon-actions';
import { defaultTheme } from '@medly-components/theme';
import { Preview, Story, Meta, Props } from '@storybook/addon-docs/blocks';
import IconContainer from './IconContainer';
import { withKnobs, color, select, boolean } from '@storybook/addon-knobs';
import { sizes, defaultColor, ThemeInterface, IconProps } from './Icons.stories';
${imports}

<Meta title="Icons" component={SvgIcon} />

# Icons

A collection of icons exported as React components (SVG icons).

### How to use

\`\`\`tsx
import { AddIcon } from '@medly-components/icons';

<AddIcon />
\`\`\`

### Props

None of the props is required but still you can style all the icons according to your requirement using below props.

<Props of={IconProps} />

If you pass onClick prop to any icon it will render background color on hover like below.

<Preview>
    <${icons[Object.keys(icons)[0]][0]} 
        onClick={action('Icon Clicked')}
        size={select('Size', sizes, 'M')} 
        color={color('Color', defaultColor)} 
        disabled={boolean('Disabled', false)} 
    />
</Preview>

### Theme

<Props of={ThemeInterface} />

${preview}
`;
};
