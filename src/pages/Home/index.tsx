import SEO from '../../components/common/SEO'
import StructuredData from '../../components/common/StructuredData'
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
                title="AMUHI - Asosiasi Milenial Umroh Haji Indonesia | Building Better Future"
                description="AMUHI adalah asosiasi resmi travel umroh dan haji Indonesia. Menyediakan sertifikasi, verifikasi, dan perlindungan untuk industri umroh haji melalui 6 program: Academy, Check, Protect, Care, Network, dan Digital."
                image="/og-images/home-hero.jpg"
                keywords="AMUHI, Asosiasi Umroh Indonesia, Asosiasi Haji Indonesia, travel umroh, travel haji, sertifikasi travel umroh, verifikasi travel haji, AMUHI Academy, AMUHI Check, AMUHI Protect, asosiasi milenial umroh haji, industri umroh Indonesia, industri haji Indonesia"
                url="/"
            />
            <StructuredData type="organization" />
            <StructuredData type="website" />
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
