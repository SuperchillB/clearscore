// We're exporting here an empty module to make sure Jest doesn't throw
// any errors for components that import external resources that are not
// JavaScript files (such as css/scss files.
// A good example for this is in App.tsx where we are importing
// 'react-loading-skeleton/dist/skeleton.css'. Jest treats this import as
// a JS import, hence the mock file we've created here for styles. This,
// along with the "moduleNameMapper" used in the Jest config, tells Jest
// not to import any external css/scss but do use this file instead.
exports.module = {};
