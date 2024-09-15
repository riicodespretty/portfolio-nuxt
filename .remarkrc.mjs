import remarkLint from 'remark-lint'
import remarkMDC from 'remark-mdc'
import remarkPresetLintConsistent from 'remark-preset-lint-consistent'
import remarkPresetLintMarkdownStyleGuide from 'remark-preset-lint-markdown-style-guide'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'
import remarkPresetPrettier from 'remark-preset-prettier'

const config = {
  plugins: [
    remarkMDC,
    remarkLint,
    remarkPresetLintConsistent,
    remarkPresetLintMarkdownStyleGuide,
    remarkPresetLintRecommended,
    remarkPresetPrettier,
  ],
}

export default config
