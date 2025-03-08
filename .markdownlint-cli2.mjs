import relativeLinksRule from "markdownlint-rule-relative-links"

const config = {
    config: {
        default: true,
        "line-length": {
            strict: false,
            code_blocks: false,
            line_length: 500
        },
        "first-line-h1": false,
        "single-h1": false,
        "no-inline-html": false,

        // part of the markdownlint-rule-relative-links plugin
        "relative-links": true
    },
    globs: [
        "**/*.{md,mdx}"
    ],
    ignores: [
        "node_modules",
        "static"
    ],
    customRules: [relativeLinksRule],
}

export default config
