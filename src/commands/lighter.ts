import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'lighter',
  run: async toolbox => {
    const { print } = toolbox

    print.info(
      ' __       __    _______  __    __  .___________. _______ .______      \n' +
        '|  |     |  |  /  _____||  |  |  | |           ||   ____||   _  \\           \n' +
        '|  |     |  | |  |  __  |  |__|  | `---|  |----`|  |__   |  |_)  |            \n' +
        '|  |     |  | |  | |_ | |   __   |     |  |     |   __|  |      /             \n' +
        '|  `----.|  | |  |__| | |  |  |  |     |  |     |  |____ |  |\\  \\----.        \n' +
        '|_______||__|  \\______| |__|  |__|     |__|     |_______|| _| `._____|\n'
    )
  }
}

module.exports = command
