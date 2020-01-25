import { GluegunToolbox } from 'gluegun';

module.exports = {
  name: 'generate rsc',
  alias: ['g-rsc'],
  description: 'Generate new react styled component',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox;

    const name = parameters.first;

    await generate({
      template: 'index.js.ejs',
      target: `components/${name}/index.js`,
      props: { name }
    });

    await generate({
      template: 'styles.js.ejs',
      target: `components/${name}/styles.js`,
      props: { name }
    });

    info(`Generated new component at models/${name}`);
  }
};
