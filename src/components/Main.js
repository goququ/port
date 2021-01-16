import React from 'react'

import workPic from '../images/work.jpg'
import infoPic from '../images/info.jpg'
import contactPic from '../images/contact.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Works</h2>
          <span className="image main">
            <img src={workPic} alt="" />
          </span>
          <h3>Некоторые из моих работ</h3>
          <ul>
            <li>
              <a target="_blank" href="https://youtility.co.uk/">
                Youtility platform
              </a>
            </li>
            <li>
              <a target="_blank" href="https://lifetime.plus/">
                Lifetime
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://business.taxi.yandex.ru/public/tariffs"
              >
                Страница тарифов Yandex Taxi corp
              </a>
            </li>

            {/* <li>
              <a target="_blank" href="http://erdc.ru/">
                Корпорация развития дальнего востока
              </a>
            </li>
            <li>
              <a target="_blank" href="http://www.altotel.ru/">
                Отель
              </a>
            </li>
            <li>
              <a target="_blank" href="https://goququ.github.io/last-fm-app/">
                Простое музыкальное приложение на React
              </a>
            </li> */}
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={infoPic} alt="" />
          </span>
          <p>
            Меня зовут Руслан Насыров, <br />Я занимаюсь Front-end разработкой с
            2015-ого, и мне это очень нравится. Я живу и работаю в
            Екатеринбурге. Начинал с фриланса, затем работал в таких фирмах как:{' '}
            <a href="https://robotvera.com/static/newrobot/index.html">
              Robotvera
            </a>{' '}
            и <a href="http://ya.ru/">Yandex</a>. Постоянно развиваюсь, ищу
            что-то новое, как в работе так и в жизни, готов к переезду.
          </p>

          <p>Основные технологии, которыми пользуюсь:</p>
          <ul>
            <li>Работаю в Linux/MacOS. Использую Node.js, консоль.</li>
            <li>
              Разрабатываю сложные интерфейсы на React. Использую Redux, MobX,
              ReduxSaga.
            </li>
            <li>
              Отлично владею JS (es5, es6), использую Typescript. Хорошо умею
              HTML5 и CSS3, вестаю на совесть.
            </li>
            <li>
              То с чем работаю/работал: git, nodejs, RestAPI, graphql, Getsby,
              WebGL, Webpack, VSCode
            </li>
            <li>
              Макеты смотрю в Avocode/Zeplin/Figma. В крайнем случае Photoshop
            </li>
            <li>Владею английским, разбираюсь в документации.</li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contacts</h2>
          <span className="image main">
            <img src={contactPic} alt="" />
          </span>
          <p>
            Телефон: <a href="tel:+79000246262">+79000246262</a>
          </p>
          <p>
            Почта: <a href="mailto:goququ@ya.ru">goququ@ya.ru</a>
          </p>
          <ul className="icons">
            <li>Сети: </li>
            <li>
              <a
                href="https://vk.com/ruslan_nasyrow"
                target="_blank"
                className="icon fa-vk"
              >
                <span className="label">VK</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/goququ"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/nasyrov_ruslan"
                target="_blank"
                className="icon fa-telegram"
              >
                <span className="label">Telegram</span>
              </a>
            </li>
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
  timeout: React.PropTypes.bool,
}

export default Main
