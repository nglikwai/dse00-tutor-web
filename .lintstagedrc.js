const escape = require('shell-quote').quote
const { CLIEngine } = require('eslint')

const cli = new CLIEngine({})
const isWin = process.platform === 'win32'

// lint stage wont work on file name with special char eg. [someFile].js
// ref: https://github.com/vercel/next.js/blob/canary/lint-staged.config.js
// ref: https://github.com/okonet/lint-staged/issues/676
module.exports = {
  '*.json': ['prettier --write', 'git add'],
  '*.md': ['prettier --write', 'git add'],
  '**/*.{js,jsx,ts,tsx}': filenames => {
    const escapedFileNames = filenames
      .map(
        filename =>
          `"${isWin ? filename.replace(/\[|\]/g, '[$&]') : escape([filename])}"`
      )
      .join(' ')
    return [
      `prettier --write ${escapedFileNames}`,
      `eslint --fix ${filenames
        .filter(file => !cli.isPathIgnored(file))
        .map(f => `"${f}"`)
        .join(' ')}`,
    ]
  },
}
