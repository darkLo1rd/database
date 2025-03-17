const cmd = {
    name: ['base'],
    command: ['base'],
    category: ['main'],
    detail: {
        desc: 'Information about this bot script'
    },
    async start({ m }) {
        m.reply('This bot uses the base: https://github.com/darkLo1rd/necro-bot')
    }
}

module.exports = cmd;