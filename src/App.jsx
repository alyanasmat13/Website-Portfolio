import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ImageStack from './components/ImageStack'

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <ImageStack />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App

