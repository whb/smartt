import { getImage } from "astro:assets"

import networkTransport16x9 from "../assets/images/slider/1_network_transport_16x9.png"
import networkTransport9x16 from "../assets/images/slider/1_network_transport_9x16.png"
const networkTransport16x9Image = await getImage({ src: networkTransport16x9 })
const networkTransport9x16Image = await getImage({ src: networkTransport9x16 })

import valueAddService16x9 from "../assets/images/slider/2_value_added_service_16x9.png"
import valueAddService9x16 from "../assets/images/slider/2_value_added_service_9x16.png"
const valueAddService16x9Image = await getImage({ src: valueAddService16x9 })
const valueAddService9x16Image = await getImage({ src: valueAddService9x16 })

import carAftermarker16x9 from "../assets/images/slider/3_car_aftermarket_16x9.png"
import carAftermarker9x16 from "../assets/images/slider/3_car_aftermarket_9x16.png"
const carAftermarker16x9Image = await getImage({ src: carAftermarker16x9 })
const carAftermarker9x16Image = await getImage({ src: carAftermarker9x16 })

import bigData16x9 from "../assets/images/slider/4_big_data_16x9.png"
import bigData9x16 from "../assets/images/slider/4_big_data_9x16.png"
const bigData16x9Image = await getImage({ src: bigData16x9 })
const bigData9x16Image = await getImage({ src: bigData9x16 })

export const slides = [
  {
    kicker: '智慧',
    background: `url("${networkTransport16x9Image.src}")`,
    background_movil: `url("${networkTransport9x16Image.src}")`,
    title: '网络货运<br>',
    highlight: '互联网+物流',
    text_color: '#fff',
    url_project: '',
    btn_href: '/portafolio/88673',
    btn_bg_color: '#F64C71',
    btn_text_color: 'white',
    invert_arrow_color: false,
  },
  {
    kicker: '便捷',
    background: `url("${valueAddService16x9Image.src}")`,
    background_movil: `url("${valueAddService9x16Image.src}")`,
    title: '增值服务<br>',
    highlight: '信用贷款产品',
    text_color: '#001d3d',
    url_project: '',
    btn_href: '/portafolio/88673',
    btn_bg_color: '#F64C71',
    btn_text_color: 'white',
    invert_arrow_color: false,
  },
  {
    kicker: '安心',
    background: `url("${carAftermarker16x9Image.src}")`,
    background_movil: `url("${carAftermarker9x16Image.src}")`,
    title: '车后市场<br>',
    highlight: '司机之家',
    text_color: '#000',
    url_project: '',
    btn_href: '/portafolio/88680',
    btn_bg_color: '#57F1B1',
    btn_text_color: 'black',
    invert_arrow_color: true,
  },
  {
    kicker: '时效',
    background: `url("${bigData16x9Image.src}")`,
    background_movil: `url("${bigData9x16Image.src}")`,
    title: '大数据<br>',
    highlight: '数据资产',
    text_color: '#e9f5db',
    url_project: '',
    btn_href: '/portafolio/88682',
    btn_bg_color: '#ABEBFF',
    btn_text_color: 'black',
    invert_arrow_color: true,
  },
];