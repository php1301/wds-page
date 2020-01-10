import React, { Component } from 'react'
import Test from './Test'

export default class Page extends Component {
    render() {
        return (
            <div>
                <div className="loader-container">
                    <Loader />
                </div>
                <div className="content-container">
                    <Homepage />
                </div>
            </div >
        )
    }
}
