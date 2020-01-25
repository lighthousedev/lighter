import { GluegunCommand } from 'gluegun';

import * as figlet from 'figlet';

const command: GluegunCommand = {
  name: 'lighter',
  alias: ['lig'],
  run: async toolbox => {
    const { print } = toolbox;

    print.info(
      figlet.textSync('Lighter', {
        font: 'Fire Font-k',
        horizontalLayout: 'fitted'
      })
    );
  }
};

module.exports = command;
