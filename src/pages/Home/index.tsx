import SEO from '../../components/common/SEO'
import Hero from './Hero'
import WhatIsAmuhi from './WhatIsAmuhi'
import Programs from './Programs'
import AsSeenOn from './AsSeenOn'
import Events from './Events'
// import Organization from './Organization'
import Testimonials from './Testimonials'

export default function HomePage() {
    return (
        <>
            <SEO
                title="Building Better Future untuk Industri Umroh & Haji"
                description="AMUHI - Asosiasi Milenial Umroh Haji Indonesia. We're not just an association — we're a movement shaping the future of Umrah & Hajj."
                image="/og-images/home-hero.jpg"
                url="/"
            />
            <Hero />
            <div className="content-sections">
                <WhatIsAmuhi />
                <Programs />
                <AsSeenOn />
                <Events />
                <Testimonials />
            </div>
        </>
    )
}
