import React from 'react';
import Header from './../common_template/header';
import Footer from './../common_template/footer';

export default props => (
    <div id='wrapper' className="single">
        <Header />
        <main role="main" id="main">
        <article className="post">
            <header>
                <div className="title">
                    <h2>Contato</h2>
                    <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum
                        ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
                </div>
            </header>
            <section>
                <form>
                    <div className="row uniform">
                        <div className="6u 12u(xsmall)">
                            <input type="text" name="demo-name" id="demo-name" value="" placeholder="Nome" />
                        </div>
                        <div className="6u 12u(xsmall)">
                            <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
                        </div>
                        <div className="12u">
                            <div className="select-wrapper">
                                <select name="demo-category" id="demo-category">
                                    <option value="">- Seção -</option>
                                    <option value="1">Front-end</option>
                                    <option value="2">Back-end</option>
                                </select>
                            </div>
                        </div>
                        <div className="4u 12u(small)">
                            <input type="radio" id="demo-priority-low" name="demo-priority" />
                            <label htmlFor="demo-priority-low">Baixa</label>
                        </div>
                        <div className="4u 12u(small)">
                            <input type="radio" id="demo-priority-normal" name="demo-priority" />
                            <label htmlFor="demo-priority-normal">Normal</label>
                        </div>
                        <div className="4u$ 12u(small)">
                            <input type="radio" id="demo-priority-high" name="demo-priority" />
                            <label htmlFor="demo-priority-high">Alta</label>
                        </div>
                        <div className="6u 12u(small)">
                            <input type="checkbox" id="demo-copy" name="demo-copy" />
                            <label htmlFor="demo-copy">Envie-me uma cópia</label>
                        </div>
                        <div className="6u$ 12u(small)">
                            <input type="checkbox" id="demo-human" name="demo-human" />
                            <label htmlFor="demo-human">Não sou um robô</label>
                        </div>
                        <div className="12u">
                            <textarea name="demo-message" id="demo-message" placeholder="Digite sua mensagem" rows="6"></textarea>
                        </div>
                        <div className="12u">
                            <ul className="actions">
                                <li><input type="button" value="Envie a mensagem" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </section>
            </article>
        </main>
        <Footer />
    </div>
);