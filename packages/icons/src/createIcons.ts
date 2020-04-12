import { capitalize } from '@medly-components/utils/src';
import { existsSync, readdirSync, unlinkSync, writeFileSync } from 'fs';
import { exportTemplate, iconTemplate, storyTemplate } from './templates';

const ICONS_DIR = './src/icons/',
    ASSETS_DIR = './src/assets/',
    INDEX_TS = './src/index.ts',
    STORY_MDX = './src/Icons.stories.mdx';

interface IconInfo {
    iconName: string;
    filenameWithExt: string;
}

const cleanup = () => {
    readdirSync(ICONS_DIR).forEach(file => file.endsWith('.tsx') && unlinkSync(`${ICONS_DIR}${file}`));
    existsSync(INDEX_TS) && unlinkSync(INDEX_TS);
    existsSync(STORY_MDX) && unlinkSync(STORY_MDX);
};

const getIconInfo = () =>
    readdirSync(ASSETS_DIR).map(filenameWithExt => ({
        filenameWithExt,
        iconName: `${filenameWithExt.split('_24')[0].split('.')[0].split('_').map(capitalize).join('')}Icon`
    }));

const createComponents = (icons: IconInfo[]) =>
    icons.forEach(({ iconName, filenameWithExt }) =>
        writeFileSync(`${ICONS_DIR}${iconName}.tsx`, iconTemplate(iconName, `../assets/${filenameWithExt}`))
    );

const createIndexFile = (icons: IconInfo[]) => writeFileSync(INDEX_TS, exportTemplate(icons.map(({ iconName }) => iconName)));

const createStory = (icons: IconInfo[]) => writeFileSync(STORY_MDX, storyTemplate(icons.map(({ iconName }) => iconName)));

const createIcons = () => {
    cleanup();
    const icons: IconInfo[] = getIconInfo();
    createComponents(icons);
    createIndexFile(icons);
    createStory(icons);
};

createIcons();
