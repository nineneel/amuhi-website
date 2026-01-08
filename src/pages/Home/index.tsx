import Hero from './Hero'
import Programs from './Programs'
import Events from './Events'
import Organization from './Organization'
import Testimonials from './Testimonials'

export default function HomePage() {
    return (
        <>
            <Hero />
            <div className="content-sections">
                <Programs />
                <Events />
                <Organization />
                <Testimonials />
            </div>
        </>
    )
}
