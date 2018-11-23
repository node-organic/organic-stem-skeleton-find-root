# organic-stem-skeleton-find-root

Finds the nearest parent directory containing `dna`. It is then considered as stem skeleton root directory returned as absolute path.

## usage

```bash
$ npm i organic-stem-skeleton-find-root --save
```

```javascript
const findSkeletonRoot = require('organic-stem-skeleton-root')
const monorepo_root = await findSkeletonRoot()
```