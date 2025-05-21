import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import { ThemeProvider } from './theme/ThemeProvider'
import { ThemeSwitch } from './components/ThemeSwitch'
import './App.css'

function App() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          personalInfo,
          summary,
          experience,
          education,
          skills,
          languages
        ] = await Promise.all([
          fetch('/data/personal-info.json').then(res => res.json()),
          fetch('/data/summary.json').then(res => res.json()),
          fetch('/data/experience.json').then(res => res.json()),
          fetch('/data/education.json').then(res => res.json()),
          fetch('/data/skills.json').then(res => res.json()),
          fetch('/data/languages.json').then(res => res.json())
        ])

        setData({
          personalInfo,
          summary: summary.text,
          highlights: summary.highlights,
          experiences: experience,
          education,
          skills: skills.items,
          skillCategories: skills.categories,
          languages
        })
      } catch (err) {
        setError('Failed to load profile data')
        console.error('Error loading data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">{error}</div>
  if (!data) return <div className="error">No data available</div>

  return (
    <ThemeProvider>
      <div className="app" style={{ 
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}>
        <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
          <ThemeSwitch />
        </div>
        <Layout data={data} />
      </div>
    </ThemeProvider>
  )
}

export default App
