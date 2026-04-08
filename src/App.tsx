import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { useTheme } from './context/ThemeContext'

function App() {

  const {isDarkMode} = useTheme()

  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
