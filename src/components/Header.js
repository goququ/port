import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-flash"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Насыров Руслан</h1>
                <p>Привет! Я Front-end разработчик, пишу код с 2015-ого года. <br /> Занимаюсь версткой сайтов и разработкой интерфейсов на React.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a style={{cursor: 'pointer'}} id="show-works" onClick={() => {props.onOpenArticle('work')}}>Works</a></li>
                <li><a style={{cursor: 'pointer'}} id="show-about" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a style={{cursor: 'pointer'}} id="show-contacts" onClick={() => {props.onOpenArticle('contact')}}>Contacts</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
