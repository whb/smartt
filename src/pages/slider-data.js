import { getImage } from "astro:assets"

import tomas16x9 from "../assets/images/slider/tomas-16x9.jpg"
import tomas9x16 from "../assets/images/slider/tomas-9x16.jpg"
const tomas16x9Image = await getImage({ src: tomas16x9 })
const tomas9x16Image = await getImage({ src: tomas9x16 })

import ship16x9 from "../assets/images/slider/ship-16x9.jpg"
import ship9x16 from "../assets/images/slider/ship-9x16.jpg"
const ship16x9Image = await getImage({ src: ship16x9 })
const ship9x16Image = await getImage({ src: ship9x16 })

import bergmanis16x9 from "../assets/images/slider/bergmanis-16x9.jpg"
import bergmanis9x16 from "../assets/images/slider/bergmanis-9x16.jpg"
const bergmanis16x9Image = await getImage({ src: bergmanis16x9 })
const bergmanis9x16Image = await getImage({ src: bergmanis9x16 })

import wayLane16x9 from "../assets/images/slider/way-lane-16x9.jpg"
import wayLane9x16 from "../assets/images/slider/way-lane-9x16.jpg"
const wayLane16x9Image = await getImage({ src: wayLane16x9 })
const wayLane9x16Image = await getImage({ src: wayLane9x16 })

export const slides = [
  {
    kicker: '效率',
    background: `url("${tomas16x9Image.src}")`,
    background_movil: `url("${tomas9x16Image.src}")`,
    title: '干线运输<br><br>',
    highlight: '优化运力',
    text_color: '#fff',
    url_project: '',
    btn_href: '/portafolio/88673',
    btn_bg_color: '#F64C71',
    btn_text_color: 'white',
    invert_arrow_color: false,
  },
  {
    kicker: '安全',
    background: `url("${ship16x9Image.src}")`,
    background_movil: `url("${ship9x16Image.src}")`,
    title: '超限件运输<br><br>',
    highlight: '优化运力',
    text_color: '#fff',
    url_project: '',
    btn_href: '/portafolio/88673',
    btn_bg_color: '#F64C71',
    btn_text_color: 'white',
    invert_arrow_color: false,
  },
  {
    kicker: '智慧',
    background: `url("${bergmanis16x9Image.src}")`,
    background_movil: `url("${bergmanis9x16Image.src}")`,
    title: 'Nos unimos <br>',
    highlight: 'al viaje',
    text_color: '#fff',
    url_project: '',
    btn_href: '/portafolio/88680',
    btn_bg_color: '#57F1B1',
    btn_text_color: 'black',
    invert_arrow_color: true,
  },
  {
    kicker: '科技',
    background: `url("${wayLane16x9Image.src}")`,
    background_movil: `url("${wayLane9x16Image.src}")`,
    title: 'Movemos <br>',
    highlight: 'personas',
    text_color: '#000',
    url_project: '',
    btn_href: '/portafolio/88682',
    btn_bg_color: '#ABEBFF',
    btn_text_color: 'black',
    invert_arrow_color: true,
  },
];