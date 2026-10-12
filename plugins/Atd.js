const {
  bot,
  setMessage,
} = require('../lib/')

const ATD_GROUP_ID = '120363421019479646@g.us'

function atdOnly(message) {
  return message.jid === ATD_GROUP_ID
}

// ==================================================
// ATD AUTO WELCOME
// ==================================================

const ATD_WELCOME = `🎉 WELCOME KE GROUP ATD! 🎉

Assalamualaikum & hello \`mention\` ❤️

Terima kasih kerana menyertai Group ATD.

⏰ Reload Modal: 9:00 AM – 11:55 PM sahaja.

📌 Sila gunakan group dengan baik & elakkan spam.

❤️ Selamat berniaga & semoga dipermudahkan!

Taip .MENU untuk lihat senarai bantuan.`

// Simpan welcome untuk GROUP ATD sahaja
setMessage(
  ATD_GROUP_ID,
  'welcome',
  ATD_WELCOME,
  true,
  null
)

// ==================================================
// ATD AUTO MENU
// ==================================================

const MENU = `🤖 ATD AUTO MENU

Sila taip keyword yang diperlukan 👇

💰 .RELOAD MODAL

📱 .TOPUP RELOAD

🌐 .TOPUP DATA INTERNET

🎫 .TOPUP PIN

🎮 .GAME PIN

🎮 .GAME TOPUP

🌍 .INTERNATIONAL TOPUP

🌐 .INTERNATIONAL INTERNET

📞 .PHONE BILL

💡 .UTILITY BILL

💵 .KOMISEN

📝 .DAFTAR AGENT

🔐 .LOGIN

📲 .LINK APP

☎️ .SPRINGPAYS

❤️ ATD Auto Assistant sedia membantu.`

bot(
  {
    pattern: 'menu',
    desc: 'ATD Auto Menu',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return
    return await message.send(Menu)
  }
)

// ==================================================
// RELOAD MODAL / BANK RELOAD
// ==================================================

bot(
  {
    pattern: 'reload modal',
    desc: 'Cara Reload Modal',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`🏦 BANK RELOAD / TAMBAH MODAL

1️⃣ Masuk ke Online Banking.
2️⃣ Pilih DuitNow Transfer.
3️⃣ Pilih Business Registration Number.
4️⃣ Masukkan 1151295D.
5️⃣ Masukkan jumlah modal yang ingin ditambah.
6️⃣ Pada Recipient Reference, WAJIB masukkan nombor telefon sendiri.

📌 Recipients: 01XXXXXXXX
📌 Detail: 01XXXXXXXX

7️⃣ Semak semua maklumat. Jika betul, tekan Transfer.

⏰ MASA RELOAD AUTOMATIK SPRINGPAYS
9.00 pagi – 11.59 malam

⚡ Reload automatik dalam tempoh 5–10 saat.

📌 MAKLUMAT PENTING
• Reload untuk pelanggan tersedia 24 jam.
• Tiada caj untuk setiap transaksi.
• Jika transaksi berjaya, tidak perlu hantar resit melalui WhatsApp.
• Jika tambah nilai masih belum diterima selepas 30 minit, sila hubungi pihak berkenaan.

⚠️ PENTING
Setiap kali menambah modal ke dalam SpringPays, nombor telefon sendiri mesti dimasukkan pada bahagian “Recipient Reference” (rujukan/kenyataan).`)
  }
)

// ==================================================
// TOPUP RELOAD
// ==================================================

bot(
  {
    pattern: 'topup reload',
    desc: 'Cara Topup Reload',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`🎫 CARA TOPUP RELOAD

📌 Masukkan mobile phone customer
💰 Taip amount / tekan amount
📝 Remark optional, tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)

// ==================================================
// TOPUP DATA INTERNET
// ==================================================

bot(
  {
    pattern: 'topup data internet',
    desc: 'Cara Topup Data Internet',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`🎫 CARA TOPUP DATA INTERNET

📌 Masukkan mobile phone customer
✅ Tekan Verify
🌐 Pilih plan internet
📝 Remark optional, tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)

// ==================================================
// TOPUP PIN
// ==================================================

bot(
  {
    pattern: 'topup pin', 
    desc: 'Cara Topup PIN',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`🎫 CARA TOPUP PIN

💰 Pilih amount
📝 Remark optional, tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)

// ==================================================
// GAME PIN
// ==================================================

bot(
  {
    pattern: 'game pin',
    desc: 'Cara Game PIN',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`🎮 CARA GAME PIN

💰 Pilih amount
📝 Remark tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)

// ==================================================
// GAME TOPUP
// ==================================================

bot(
  {
    pattern: 'game topup',
    desc: 'Cara Game Topup',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`🎮 CARA GAME TOPUP

📌 Masukkan User ID game
📌 Zone ID = nombor dalam kurungan
💰 Pilih amount
📝 Remark tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)

// ==================================================
// INTERNATIONAL TOPUP
// ==================================================

bot(
  {
    pattern: 'international topup',
    desc: 'Cara International Topup',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`🌍 CARA INTERNATIONAL TOPUP

📌 Masukkan no customer
✅ Tekan Verify
💰 Pilih amount
📝 Remark tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)

// ==================================================
// INTERNATIONAL INTERNET
// ==================================================

bot(
  {
    pattern: 'international internet',
    desc: 'Cara International Internet',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`🌍 CARA INTERNATIONAL INTERNET

📌 Masukkan no customer
✅ Tekan Verify
💰 Pilih amount
📝 Remark tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)

// ==================================================
// PHONE BILL
// ==================================================

bot(
  {
    pattern: 'phone bill',
    desc: 'Cara Bayar Phone Bill',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`🎫 CARA BAYAR PHONE BILL

📌 Masukkan mobile phone / acc number customer
💰 Masukkan amount
📝 Remark optional, tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)

// ==================================================
// UTILITY BILL
// ==================================================

bot(
  {
    pattern: 'utility bill',
    desc: 'Cara Bayar Utility Bill',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`🎫 CARA BAYAR UTILITY BILL

📌 Masukkan acc number bill
🔎 Sesetengah bill boleh check baki
💰 Masukkan amount
📝 Remark tak perlu isi
➡️ Tekan button >

✅ Selepas Suksess, tekan ☰
📤 Kemudian tekan Share Receipt untuk share resit pada customer

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)

// ==================================================
// KOMISEN
// ==================================================

bot(
  {
    pattern: 'komisen',
    desc: 'Cara Semak Komisen',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`💵 CARA SEMAK KOMISEN

👤 Tekan Profile
🔎 Cari My Discount Info
➡️ Tekan My Discount Info

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)

// ==================================================
// DAFTAR AGENT
// ==================================================

bot(
  {
    pattern: 'daftar agent',
    desc: 'Daftar Agent',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`📝 DAFTAR AGENT

📲 Link Register:
https://www.springpays.com/signup/1a42ab6656203c61ca2d24e19b49c7cd

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)

// ==================================================
// LOGIN
// ==================================================

bot(
  {
    pattern: 'login',
    desc: 'Cara Login',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`🔐 CARA LOGIN

📌 Allowkan detail kalau naik tanda

👤 Username: No. Phone
🔑 Password: Check mesej SpringPay

🔐 Current Password: Sama
🔑 New Password: Masukkan password baru
🔑 Confirm Password: Masukkan password baru

❌ Kalau tak boleh login, screenshot dan hantar dekat Helpline SpringPay.

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)

// ==================================================
// LINK APP
// ==================================================

bot(
  {
    pattern: 'link app',
    desc: 'Link App',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`📲 LINK APP

🤖 Android:
https://play.google.com/store/apps/details?id=co.appsquare.spring_pays

🍎 iPhone:
https://apps.apple.com/my/app/spring-pays/id6476165888

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)

// ==================================================
// SPRINGPAYS
// ==================================================

bot(
  {
    pattern: 'springpays',
    desc: 'Springpays ATD',
    onlyGroup: true,
    type: 'group',
  },
  async (message) => {
    if (!atdOnly(message)) return

    return await message.send(`☎️ SPRINGPAYS 

📲 WhatsApp: 018-2990000
📅 Jumaat: CUTI

🙏 Harap bersabar. Helpline akan respon sekejap lagi.

🤖 Jika masih kurang jelas, boleh hubungi admin.`)
  }
)
