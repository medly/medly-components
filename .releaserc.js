module.exports = {
    verifyConditions: [],
    verifyRelease: ['@semantic-release/npm', '@semantic-release/github'].map(require).map(x => x.verifyConditions)
};
