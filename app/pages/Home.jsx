import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import actions from '../actions/index'

import Header from '../components/Header.jsx'

require('../scss/main.scss')

export class HomeView extends Component {

    render() {
        const { color, linkToAnotherPage, changeColor } = this.props;

        return (
            <div>
                <Header />
                <p onClick={ () => linkToAnotherPage() }>
                    I'm a paragraph, click me to go another page.
                </p>
                <p className={color} onClick={ () => changeColor() }>
                    I'm a weird paragraph, click me to change color.
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    color: state.color
})

const mapDispatchToProps = dispatch => ({
    linkToAnotherPage: () => dispatch(push('/second')),
    changeColor: () => dispatch(actions.changeColor())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
