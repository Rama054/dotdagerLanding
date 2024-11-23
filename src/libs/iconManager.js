import * as ReactIcons from 'react-icons';

async function getAllIcons() {
    const allLibs = ReactIcons.IconsManifest.map(lib => lib.id);
    const allIcons = {};

    await Promise.all(
        allLibs.map(async (lib) => {
            const icons = await import(/* @vite-ignore */`react-icons/${lib}`);
            Object.assign(allIcons, icons);
        })
    );

    return allIcons;
}

const remixIcons = await getAllIcons()
export default remixIcons;
