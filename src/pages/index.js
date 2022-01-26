import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Technologies from '../components/Technologies/Technologies'
import { Layout } from '../layout/Layout'
import { Section } from '../styles/GlobalComponents'
// import Timeline from '../components/TimeLine/TimeLine'
// import Acomplishments from '../components/Acomplishments/Acomplishments'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Technologies />
      <Projects />

      {/* <Timeline /> */}
      {/* <Acomplishments /> */}
    </Layout>
  )
}

export default Home
