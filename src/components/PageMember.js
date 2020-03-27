import React, { Component } from 'react'
import { Show } from '../components/Members'
export default class PageMember extends Component {
    // componentDidMount() {
    //     render(<Show />, document.getElementById('rooted'))
    // }

    render() {
        return (


            <div class="layout__wrapper">
                <div class="layout__item">
                    <div id="rooted">
                        <Show/>
                    </div>
                </div>
            </div>

        )
    }
}
