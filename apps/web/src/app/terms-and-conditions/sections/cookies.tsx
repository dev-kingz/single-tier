import React from 'react'

const cookies = () => {
    return (
        <section className="CookiesSection flex flex-col w-full ">
            <h3
                className="SubHeading 
                    self-stretch
                    text-black dark:text-white"
            >
                Cookies
                <br />
                <br />
            </h3>
            <p
                className="Text 
                    self-stretch
                    text-black dark:text-white"
            >
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

export default cookies