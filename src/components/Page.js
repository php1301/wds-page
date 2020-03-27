import React, { Component } from 'react'

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
