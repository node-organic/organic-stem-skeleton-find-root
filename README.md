# organic-stem-skeleton-find-root

Finds the nearest parent directory containing `dna`. It is then considered as stem skeleton root directory returned as absolute path.

Note that it starts searching from the `path.dirname(process.cwd())`, ie from the parent directory of the current working one.

## usage

```bash
$ npm i organic-stem-skeleton-find-root --save
```

```javascript
const findSkeletonRoot = require('organic-stem-skeleton-root')
const monorepo_root = await findSkeletonRoot()
```
