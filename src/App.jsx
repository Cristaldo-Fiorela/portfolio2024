import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

function App() {

  return (
    <>
      <Header />
      <Welcome />
      <main id='main-container'>
        <About />
        <Skills />
        <Projects/>
      </main>
      <Footer />
    </>
  )
}

export default App 