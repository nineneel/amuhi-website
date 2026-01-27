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
