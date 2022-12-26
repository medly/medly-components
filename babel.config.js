module.exports = function (api) {
    api.cache(true);
    return { extends: '@medly/babel-config-react' };
};
