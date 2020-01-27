const { build } = require('gluegun');

async function run(argv) {
  const cli = build()
    .brand('lighter')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'lighter-*', hidden: true })
    .help()
    .version()
    .exclude([
      'meta',
      'strings',
      'filesystem',
      'semver',
      'system',
      'prompt',
      'http',
      'patching'
    ])
    .checkForUpdates(5)
    .create();
  const toolbox = await cli.run(argv);

  return toolbox;
}

module.exports = { run };
