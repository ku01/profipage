import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import { loadProfileData } from './services/dataLoader'
import { useFavicon } from './services/faviconLoader'
import './App.css'

function App() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Initialize favicon handling
  useFavicon()

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Starting to fetch data...')
        const profileData = await loadProfileData()
        console.log('Loaded profile data:', profileData)

        setData({
          personalInfo: profileData.personalInfo,
          summary: profileData.summary.text,
          highlights: profileData.summary.highlights,
          experiences: profileData.experience,
          education: profileData.education,
          skills: profileData.skills.items,
          skillCategories: profileData.skills.categories
        })
      } catch (err) {
        console.error('Error in fetchData:', err)
        setError('Failed to load profile data')
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
    <div className="app">
      <Layout data={data} />
    </div>
  )
}

export default App
