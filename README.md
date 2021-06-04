# vite-legacy issue (https://github.com/vitejs/vite/issues/3670)

```
yarn
yarn build
```

```
tjk@DESKTOP-MUHHEFH:~/src/github.com/tjk/vite-legacy-issue$ yarn build
yarn run v1.22.5
warning package.json: No license field
$ vite build
vite v2.3.6 building for production...
transforming (8) node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.jsThe 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten
The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten
✓ 43 modules transformed.
✓ 43 modules transformed. (x2)
[vite:worker] Cannot read property 'fileName' of undefined
file: /home/tjk/src/github.com/tjk/vite-legacy-issue/node_modules/monaco-editor/esm/vs/editor/editor.worker.js?worker&inline
error during build:
TypeError: Cannot read property 'fileName' of undefined
    at transformIndexHtml (/home/tjk/src/github.com/tjk/vite-legacy-issue/node_modules/@vitejs/plugin-legacy/index.js:266:17)
    at applyHtmlTransforms (/home/tjk/src/github.com/tjk/vite-legacy-issue/node_modules/vite/dist/node/chunks/dep-cb562f8f.js:24645:27)
    at Object.generateBundle (/home/tjk/src/github.com/tjk/vite-legacy-issue/node_modules/vite/dist/node/chunks/dep-cb562f8f.js:24605:32)
    at /home/tjk/src/github.com/tjk/vite-legacy-issue/node_modules/rollup/dist/shared/rollup.js:19948:25
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
