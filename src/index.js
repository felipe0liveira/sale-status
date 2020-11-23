;(() => {
  const { load } = require('cheerio')
  const afterLoad = require('after-load')

  let marketplace = []
  let pageHTML = ''
  let $ = {}

  marketplace['kabum'] = () => {
    const isAvailable =
      $('.disponibilidade').html().indexOf('disponibilidade_on') !== -1

    let price = $('.box_preco .ParcelamentoCartao > div ul > li strong').html()

    price = price
      .substring(price.indexOf('R$ ') + 3, price.indexOf(' c/'))
      .replace('.', '')
      .replace(',', '.')

    price = parseFloat(price)

    return { isAvailable, price }
  }

  marketplace['amazon'] = () => {
    const isAvailable =
      $('#availability > span').html().indexOf('N&#xE3;o dispon&#xED;vel') ===
      -1

    if (!isAvailable) {
      return { isAvailable }
    }

    let price = $('.priceBlockBuyingPriceString').html()

    price = price
      .substr(price.indexOf('R$') + 2)
      .replace('.', '')
      .replace(',', '.')

    price = parseFloat(price)

    return { isAvailable, price }
  }

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
