;(() => {
  const { load } = require('cheerio')
  const afterLoad = require('after-load')

  let marketplace = []
  let pageHTML = ''
  let $ = {}

  const checkMarketplace = (url) => {
    const player = url.substring(url.indexOf('www.') + 4, url.indexOf('.com'))

    if (marketplace[player]) {
      pageHTML = afterLoad(url)
      $ = load(pageHTML)

      const brasTempL = marketplace[player]()
      console.log(brasTempL)
    } else {
      console.log('Player not found')
    }
  }

  console.clear()
  console.log('pera que ta ino <i class="fa fa-spiiner fa-spin fa-pulse"></i>')
  checkMarketplace()
  // 'https://www.amazon.com.br/PlayStation-Controle-5-DualSense/dp/B088GNW267/ref=pd_sim_63_1/146-1256701-6402666'
  // 'https://www.amazon.com.br/dp/B08CWG5K2D/ref=cm_sw_r_wa_apa_fabt1_h3dVFb8QR4WE1'
  // 'https://www.kabum.com.br/produto/128245/console-sony-playstation-5-digital-edition-cfi-1014b'
})()
