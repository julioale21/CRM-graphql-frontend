module.exports = {
  git: {
    commit: true,
    commitMessage: 'chore: release v${version}',
    tag: true,
    tagAnnotation: 'Release v${version}',
    push: true,
    requireUpstream: false,
  },
  github: {
    release: true,
    releaseName: 'Release v${version}',
    tokenRef: 'GITHUB_TOKEN'
  },
  npm: {
    publish: false,
  },
  plugins: {
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      preset: 'angular',
    },
  },
};