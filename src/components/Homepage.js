import React, { Component } from 'react'
import '../wp-content/themes/monopo/css/reset.css'
import '../wp-content/themes/monopo/css/style.css'
import { NavLink, Link } from 'react-router-dom'
import '../../node_modules/owl.carousel/dist/owl.carousel'
import Sub from './Sub'
export default class Homepage extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <Sub />
        )
    }
}
