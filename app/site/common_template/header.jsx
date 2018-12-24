import React from 'react'

export default props => (
    <div>

<header id="header">
      <h1><a href="#">Future Imperfect</a></h1>
      <nav className="links">
          <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#contact">Contato</a></li>
          </ul>
      </nav>
      {/* <nav className="main">
                <ul>
                    <li className="search">
                        <a className="fa-search" href="#search">Search</a>
                        <form id="search" method="get" action="#search">
                            <input type="text" name="q" placeholder="Search" />
                        </form>
                    </li>
                    <li className="menu">
                        <a className="fa-bars" href="#menu">Menu</a>
                    </li>
                </ul>
            </nav> */}
    </header>
    <section id="menu">

    {/* <section>
                <form className="search" method="get" action="#search">
                    <input type="text" name="q" placeholder="Search" />
                </form>
            </section>
*/}
            <section>
                <ul className="links">
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#contact">Contato</a></li>
                    {/* <li>
                        <a href="#">
                            <h3>Etiam sed consequat</h3>
                            <p>Porta lectus amet ultricies</p>
                        </a>
                    </li> */}
                </ul>
            </section> 

            <section>
                <ul className="actions vertical">
                    <li><a href="#" className="button big fit">Log In</a></li>
                </ul>
            </section>

    </section>
    </div>
    
)