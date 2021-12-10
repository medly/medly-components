import { capitalize } from '@medly-components/utils';
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
        iconName: `${filenameWithExt.split('_24px')[0].split('.')[0].split('_').map(capitalize).join('')}Icon`
    }));

const getDirectories = () => readdirSync(ASSETS_DIR).map(DIR => `${DIR}/`),
    getIconNames = (DIR: string) => getIcons(DIR).map(({ iconName }) => iconName);

const createComponents = (directories: string[]) =>
    directories.forEach((DIR: string) =>
        getIcons(DIR).forEach(({ iconName, filenameWithExt }) => {
            mkdirSync(ICONS_DIR + DIR, { recursive: true });
            writeFileSync(`${ICONS_DIR}${DIR}${iconName}.tsx`, iconTemplate(iconName, `../../assets/${DIR}${filenameWithExt}`));
        })
    );

const createIndexFile = (icons: { [k: string]: string[] }) => writeFileSync(INDEX_TS, exportTemplate(icons));
const createStory = (icons: { [k: string]: string[] }) => writeFileSync(STORY_MDX, storyTemplate(icons));

const createIcons = () => {
    const directories = getDirectories(),
        // Icon names as array for each dir. {[dir_name]: iconNames[]}
        icons = directories.reduce(
            (acc, cur) => ({
                ...acc,
                [cur]: getIconNames(cur)
            }),
            {}
        );
    createComponents(directories);
    createIndexFile(icons);
    createStory(icons);
};

createIcons();
