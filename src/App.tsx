import {useEffect, useState} from 'react'
import Layout from './components/Layout'
import {DataLoadError, loadProfileData} from './services/dataLoader'
import {useFavicon} from './services/faviconLoader'
import './App.css'

function App() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isDataLoadError, setIsDataLoadError] = useState(false)

  // Initialize favicon handling
  useFavicon()

  const handleRefresh = () => {
    window.location.reload()
  }

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
        
        if (err instanceof DataLoadError) {
          setError(err.message)
          setIsDataLoadError(true)
        } else {
          setError('An unexpected error occurred. Please refresh the page to try again.')
          setIsDataLoadError(true)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div className="loading">Loading...</div>
  
  if (error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <div className="error-icon">⚠️</div>
          <h2>Data Loading Error</h2>
          <p className="error-message">{error}</p>
          {isDataLoadError && (
            <button 
              className="refresh-button" 
              onClick={handleRefresh}
              type="button"
            >
              Refresh Page
            </button>
          )}
        </div>
      </div>
    )
  }
  
  if (!data) return <div className="error">No data available</div>

  return (
    <div className="app">
      <Layout data={data} />
    </div>
  )
}

export default App
