const chalk = require("chalk")
const fs = require("fs")

require("./lib/vn")
require("./scrape/tiktok")
global.bad = ["anjing","Anjing","Memek","Asu","Asw","Bangsat","Tolol","Goblok","Gblk","Ajg","Mmk","memek","bangsat","goblok","tolol","peler","pler","ajg","asw","asu","gblk","mmk","bgst","bngst","puki","kimak","kmk","goblock","goblog","tytyd","titid"]
global.hituet = 0
global.gopayno = "0858-6907-4622"
global.danano = "0858-6907-4622"
global.shopeepayno = "0858-6907-4622"
global.botName = "Elaina Chan"
global.wm = "ć š“š»š°šøš½š° š½š¾š ššøš±š ā“Ģā°Ķā“Ģµ"
global.creator = "6285869074622@s.whatsapp.net"
global.thumb = fs.readFileSync(`./image/thumb.png`)
global.qrisdonate = fs.readFileSync(`./image/qris.jpg`)
global.fake = `š§ļøššššššš šš¢ šššššš-šššš šš š`
global.packname = ``
global.author = `ĆĶĆ ā­ā¬ā­ā¬ā­ā¬ š ā­ā¬ā­ā¬ā­ā¬ ĆĶĆ\nļ¾ ššššššš šš šš„šš¢š§š\nļ¾ ššæš²š®šš¼šæ šš„šš¢š§š : 085869074622\nļ¾ š¬š¼ššššÆš² : ššš§š¬ššØš«š\nāāāāāāāāāā`
global.antilink = false
global.antiwame = false
global.autodltt = false
global.autosticker = true
global.autoreadsw = true
global.ownerNomor = '6285869074622'
global.ownerName = 'Abdul Masuk Surga'
global.ownerNumber = ["6285869074622@s.whatsapp.net"]
global.cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
global.mess = {
    wait: 'Wait Onii-Chan Please be patient',
    succes: 'Good Luck Nii-chan ?',
    admin: 'Group Admin Special Features!!!',
    botAdmin: 'Bots Must Be Admins First!!!',
    owner: 'Ente Kadang-kadang Ente, Nih Khusus Owner Nih!!!',
    group: 'Features Used Only For Groups!!!',
    private: 'Features Used Only For Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Onii-sanTwT, Please Chat Owner...',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
}

global.bapak = [
'Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs',
'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda',
'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v',
'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID',
]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})