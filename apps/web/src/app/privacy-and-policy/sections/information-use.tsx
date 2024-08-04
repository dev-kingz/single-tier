import SectionHeader from '@/components/headers/section-header';
import React from 'react'

const InformationUse = () => {
    return (
        <section className="InformationUse flexit-it flex-col px-8 sm:px-48 py-4">
            <SectionHeader title="How we use your information" />
            <p className="Text">
                We use the information we collect in various ways, including to:
                <br />
                <br />
            </p>
            <ul className="List" >
                <li>
                    <p>Provide, operate, and maintain our website</p>
                </li>
                <li>
                    <p>Improve, personalize, and expand our website</p>
                </li>
                <li>
                    <p>Understand and analyze how you use our website</p>
                </li>
                <li>
                    <p>Develop new products, services, features, and functionality</p>
                </li>
                <li>
                    <p>
                        Communicate with you, either directly or through one of our partners, including for
                        customer service, to provide you with updates and other information relating to the
                        website, and for marketing and promotional purposes
                    </p>
                </li>
                <li>
                    <p>Send you emails</p>
                </li>
                <li>
                    <p>Find and prevent fraud</p>
                </li>
            </ul>
        </section>
    )
}

export default InformationUse;