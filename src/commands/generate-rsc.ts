import { GluegunToolbox } from 'gluegun';

module.exports = {
  name: 'generate-rsc',
  alias: ['g-rsc'],
  description: 'Generate new react styled component',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox;

    const path = parameters.first;

    const name = path.split('/').pop();

    await generate({
      template: 'index.js.ejs',
      target: `src/${path}/index.js`,
      props: { name }
    });

    await generate({
      template: 'styles.js.ejs',
      target: `src/${path}/styles.js`,
      props: { name }
    });

    info(`Generated new component at components/${path}`);
  }
};
