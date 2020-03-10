import React, { Component } from 'react'

export default class FooterDecoration extends Component {
    render() {
        return (
            <section className="idea" id="idea">
                <div className="wave-wrapper animation SlidefromDown in-view">
                    <div className=" wave-pink" />
                </div>
                <div className="inner   secondary-color-bg">
                    <div className="row align-center text-center">
                        <div className="columns xxlarge-6 xlarge-6 large-7 medium-8 small-11">
                            <h2 className="headline xxlarge white-color animation fromDown t-delay-20 idea-header in-view">Zróbmy to!</h2>
                            <p className="white-color">Popracujmy nad wspólnym projektem.<br />
                                <br />
          Jesteś ciekaw, co możemy zrobić dla Twojego biznesu? Chcesz skorzystać z zalet marketingu online, potrzebujesz graficznej obsługi firmy, planujesz uruchomić sklep internetowy albo kampanię reklamową adwords?<br />
                                <br />
          Skontaktuj się z nami i zobacz, jakie działania podejmiemy, by nasz wspólny projekt zrealizował Twój cel biznesowy.</p>
                            <a className="idea-contact-button button primary-white-color animation fromDown t-delay-60 no-decoration in-view" href="/kontakt/" target><span>Skontaktuj się</span></a>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
