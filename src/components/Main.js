import React from 'react'
import Link from 'gatsby-link'


import workPic from '../images/work.jpg'
import infoPic from '../images/info.jpg'
import contactPic from '../images/contact.jpg'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={infoPic} alt="" /></span>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Works</h2>
          <span className="image main"><img src={workPic} alt="" /></span>
          <h3>Некеоторые из моих работ</h3>
          <ul>
            <li><a target="_blank" href="http://m.renault.saturn2.ru/">Мобильный сайт автоцентра Челябинска</a></li>
            <li><a target="_blank" href="http://erdc.ru/">Корпорация развития дальнего востока</a></li>
            <li><a target="_blank" href="http://www.altotel.ru/">Отель</a></li>
            <li><a target="_blank" href="https://quandt.ru/">Магазин нижнего белья</a></li>
            <li><a target="_blank" href="https://goququ.github.io/landing1/">Верстка, лендинг</a></li>
            <li><a target="_blank" href="https://goququ.github.io/resp-land-1/">Верстка, лендинг школы ниостранных языков</a></li>
            <li><a target="_blank" href="https://goququ.github.io/gh-iss/">React, просмотр ошибок репозиториев пользователей</a></li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={infoPic} alt="" /></span>
          <p>
            Меня зовут Руслан Насыров, <br/>
            Я занимаюсь Front-end разработкой с 2015-ого, и мне это очень нравится. Я живу и работаю в Челябинске.
            Начинал с фриланса, затем работал в таких фирмах как: <a href="https://www.dextra.ru/">Dextra</a> и <a href="http://aimax.pro/">Aimax</a>.
            Постоянно развиваюсь, ищу что-то новое, как в работе так и в жизни, готов к переезду.
          </p>
          
          <p>
            Основные технологии, которыми пользуюсь:
          </p>
          <ul>
            <li>Работаю в Linux окружении. Использую Node.js, консоль.</li>
            <li>Верстку начинаю на отличном темплейте от <a href="https://github.com/CSSSR/csssr-project-template">CSSSR</a> (gulp, stylus, pug (ex jade), svg, спрайты, BEM,)</li>
            <li>В последнее время увлекся React и его окружением (creacte-react-app, Redux, Router, Middlewares). Основной упор в будущем хочу сделать именно на этом стеке технологий</li>
            <li>В проектах использую различные плагины для элементов страниц (OwlCarusel , FancyBox, d3.charts и т.д.). Использую Yandex Maps JS API, стилизую карты.</li>
            <li>Использую нативный JS на достаточном уровне. Применяю JQuery (не на реакте =). Постигаю ES6, Babel и т.д.</li>
            <li>Работаю с Git, Github Pages</li>
            <li>Photoshop, для доработки макета. При верстке Avocode.</li>
            <li>Владею английским, разбираюсь в документации.</li>
            <li>Верстаю кроссбраузерно, валидно, адаптивно. <a href="https://www.browserstack.com">Browserstack</a> для iOS, для IE <a href="https://www.virtualbox.org/">VirtualBox</a></li>
          </ul>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contacts</h2>
          <span className="image main"><img src={contactPic} alt="" /></span>
          <p>Телефон:  <a href="tel:+79000246262">+79000246262</a></p>
          <p>Почта:  <a href="mailto:goququ@ya.ru">goququ@ya.ru</a></p>
          <ul className="icons">
            <li>Сети: </li>
            <li><a href="https://vk.com/ruslan_nasyrow" className="icon fa-vk"><span className="label">VK</span></a></li>
            <li><a href="https://github.com/goququ" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main