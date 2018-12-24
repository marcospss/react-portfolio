import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from './../../auth/authActions';

class Menu extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id={this.props.idName}>

                <section>
                    <form className="search" method="get" action="#search">
                        <input type="text" name="q" placeholder="Search" />
                    </form>
                </section>

                <section>
                    <ul className="links">
                        <li><a href="#dashboard" className="icon fa-home">Dashboard</a></li>
                        <li><a href="#dashboard/users" className="icon fa-users">Usuários</a></li>
                        <li><a href="#dashboard/sections" className="icon fa-list-alt">Seções</a></li>
                        <li><a href="#dashboard/projects" className="icon fa-list-ul">Projetos</a></li>
                    </ul>
                </section>

                <section>
                    <ul className="actions vertical">
                        <li>
                            <button className="button fit icon fa-sign-out" onClick={this.props.logout}>Sair</button>
                        </li>
                    </ul>
                </section>

            </section>
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Menu)