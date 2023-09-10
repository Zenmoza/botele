const fs = require('fs')
const config = JSON.parse(fs.readFileSync(`./config.json`))

exports.start = async(lol, name) => {
    text = `Hallo ${name}! Jika Butuh .`
    await lol.replyWithMarkdown(text, { disable_web_page_preview: true })
}

exports.help = async(lol, name, user_id) => {
    text = `Hello ${name}! Mau Transaksi apa hari ini ?`
    options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Pulsa', callback_data: 'pulsa-' + user_id },
                    { text: 'Paket Data', callback_data: 'paketdata-' + user_id }
                ],
                [
                    { text: 'Token Listrik', callback_data: 'tokenlstrik-' + user_id },
                    { text: 'E-Money', callback_data: 'emoney-' + user_id }
                ],
                [
                    { text: 'Top-up Games', callback_data: 'topupgames-' + user_id },
                    { text: 'Voucher', callback_data: 'voucher-' + user_id },
                ],
                [
                    { text: 'Deposit Saldo', callback_data: 'depo-' + user_id },
                    { text: 'History Orderan', url: 'https://t.me/WarsaRekap-' + user_id },
                ],
                [
                    { text: 'Lapor Masalah', callback_data: 'http://t.me/anantorisqy-' + user_id },
                ],
                [
                    { text: 'Cara Order', callback_data: 'caraorder-' + user_id },
                ],
                [
                    { text: 'Cara Deposit', callback_data: 'caradepo-' + user_id },
                ]
            ]
        }
    }
    try {
        await lol.editMessageText(text, options)
    } catch {
        await lol.reply(text, options)
    }
}

exports.pulsa = async(lol, user_id) => {
    prefix = config.prefix
    text = 'Silahkan pilih jenis provider. Kirim perintah */cancel* untuk batal.'
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'AXIS', callback_data: 'axis-' + user_id },
                    { text: 'INDOSAT', callback_data: 'indosat-' + user_id }
                ],
                [
                    { text: 'TELKOMSEL', callback_data: 'telkomsel-' + user_id },
                    { text: 'SMARTFREN', callback_data: 'smarfren-' + user_id }
                ],
                [
                    { text: 'TRI', callback_data: 'tri-' + user_id },
                    { text: 'by.U', callback_data: 'byu-' + user_id },
                    { text: 'XL', callback_data: 'xl-' + user_id}
                ]
            ]
        }
    })
}
exports.paketdata = async(lol, user_id) => {
    prefix = config.prefix
    text = 'Silahkan pilih jenis provider. Kirim perintah */cancel* untuk batal.'
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'AXIS', callback_data: 'axis-' + user_id },
                    { text: 'INDOSAT', callback_data: 'indosat-' + user_id }
                ],
                [
                    { text: 'TELKOMSEL', callback_data: 'telkomsel-' + user_id },
                    { text: 'TRI', callback_data: 'tri-' + user_id },
                    { text: 'XL', callback_data: 'xl-' + user_id }
                ]
            ]    
        }
    })
}
exports.tokenlistrik = async(lol, user_id) => {
    prefix = config.prefix
    text = 'Silahkan pilih jenis provider. Kirim perintah */cancel* untuk batal.'
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'PLN', callback_data: 'pln-' + user_id }
                ]
            ]
        }
    })
}
exports.emoney = async(lol, user_id) => {
    prefix = config.prefix
    text = 'Silahkan pilih jenis provider. Kirim perintah */cancel* untuk batal.'
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'DANA', callback_data: 'dana-' + user_id },
                    { text: 'DOKU', callback_data: 'doku-' + user_id }
                ],
                [
                    { text: 'GO-PAY', callback_data: 'gopay-' + user_id },
                    { text: 'LINKAJA', callback_data: 'linkaja-' + user_id }
                ],
                [
                    { text: 'MITRA SHOPEE', callback_data: 'mitrashopee-' + user_id },
                    { text: 'OVO', callback_data: 'ovo-' + user_id }
                    { text: 'SHOPEE-PAY', callback_data: 'shopeepay-' + user_id }
                ]
            ]
        }
    })
}
exports.vouchergame = async(lol, user_id) => {
    prefix = config.prefix
    text = 'Silahkan pilih jenis game. Kirim perintah */cancel* untuk batal.'
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'CODM', callback_data: 'codm-' + user_id },
                    { text: 'FREE FIRE', callback_data: 'ff-' + user_id }
                ],
                [
                    { text: 'MOBILE LEGENDS', callback_data: 'ml-' + user_id },
                    { text: 'PUBGM', callback_data: 'pubgm-' + user_id }
                ]
            ]
        }
    })
}
exports.vouchergame = async(lol, user_id) => {
    prefix = config.prefix
    text = 'Silahkan pilih jenis game. Kirim perintah */cancel* untuk batal.'
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'CODM', callback_data: 'codm-' + user_id },
                    { text: 'FREE FIRE', callback_data: 'ff-' + user_id }
                ],
                [
                    { text: 'MOBILE LEGENDS', callback_data: 'ml-' + user_id },
                    { text: 'PUBGM', callback_data: 'pubgm-' + user_id }
                ]
            ]
        }
    })
}
exports.voucher = async(lol, user_id) => {
    prefix = config.prefix
    text = 'Silahkan pilih jenis voucher. Kirim perintah */cancel* untuk batal.'
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Back', callback_data: 'help-' + user_id }
                ]
            ]
        }
    })
}
exports.depo = async(lol, user_id) => {
    prefix = config.prefix
    text = 'Silahkan pilih metode Deposit. atau pilih /back untuk kembali ke menu'
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'QRIS', callback_data: 'qris-' + user_id },
                    { text: 'Transfer Bank', callback_data: 'tfbank-' + user_id }
                ]
            ]
        }
    })
}
exports.caraorder = async(lol, user_id) => {
 prefix = config.prefix
    text = 'Coming Soon'
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'QRIS', callback_data: 'qris-' + user_id },
                    { text: 'Transfer Bank', callback_data: 'tfbank-' + user_id }
                ]
            ]
        }
    })
}
exports.caradepo = async(lol, user_id) => {
     prefix = config.prefix
    text = 'Coming Soon'
    await lol.editMessageText(text, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'QRIS', callback_data: 'qris-' + user_id },
                    { text: 'Transfer Bank', callback_data: 'tfbank-' + user_id }
                ]
            ]
        }
    })
}
exports.messageError = async(lol) => {
    await lol.reply(`Error! Please report to the [${config.owner}](${config.ownerLink}) about this`, { parse_mode: "Markdown", disable_web_page_preview: true })
}