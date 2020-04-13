import { capitalize } from '@medly-components/utils/src';
import { mkdirSync, readdirSync, writeFileSync } from 'fs';
import { exportTemplate, iconTemplate, storyTemplate } from './templates';

const ICONS_DIR = './src/icons/',
    ASSETS_DIR = './src/assets/',
    INDEX_TS = './src/index.ts',
    STORY_MDX = './src/Icons.stories.mdx';

interface IconInfo {
    iconName: string;
    filenameWithExt: string;
}

const getIcons = (DIR: string): IconInfo[] =>
    readdirSync(ASSETS_DIR + DIR).map(filenameWithExt => ({
        filenameWithExt,
        iconName: `${filenameWithExt.split('_24')[0].split('.')[0].split('_').map(capitalize).join('')}Icon`
    }));

const getDirectories = () => readdirSync(ASSETS_DIR).map(DIR => DIR + '/'),
    getIconNames = (DIR: string) => getIcons(DIR).map(({ iconName }) => iconName);

const createComponents = (directories: string[]) =>
    directories.forEach((DIR: string) =>
        getIcons(DIR).forEach(({ iconName, filenameWithExt }) => {
            mkdirSync(ICONS_DIR + DIR, { recursive: true });
            writeFileSync(`${ICONS_DIR}${DIR}${iconName}.tsx`, iconTemplate(iconName, `../../assets/${DIR}${filenameWithExt}`));
        })
    );

const createIndexFile = (directories: string[]) =>
    directories.forEach(DIR => writeFileSync(INDEX_TS, exportTemplate(DIR, getIconNames(DIR))));

const createStory = (directories: string[]) => {
    // Icon names as array for each dir. {[dir_name]: iconNames[]}
    const icons = directories.reduce(
        (acc, cur) => ({
            ...acc,
            [cur]: getIconNames(cur)
        }),
        {}
    );
    writeFileSync(STORY_MDX, storyTemplate(icons));
};

const createIcons = () => {
    const directories = getDirectories();
    createComponents(directories);
    createIndexFile(directories);
    createStory(directories);
};

createIcons();
