import SectionHeader from '@/components/headers/section-header'
import React from 'react'

const Cookies = () => {
    return (
        <section className="CookiesSection flexit-it flex-col px-8 sm:px-48">
            <SectionHeader title="Cookies"/>
            <p className="Text">
                We employ the use of cookies. By accessing DigiLearn, you agreed to use cookies in
                agreement with the DigiLearn&apos;s Privacy Policy.
                <br />
                <br />
                Most interactive websites use cookies to let us retrieve the user&apos;s details for each
                visit. Cookies are used by our website to enable the functionality of certain areas to
                make it easier for people visiting our website. Some of our affiliate/advertising partners
                may also use cookies.
                <br />
                <br />
            </p>
        </section>
    )
}

export default Cookies