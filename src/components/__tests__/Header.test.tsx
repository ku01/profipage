import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../Header'

const mockPersonalInfo = {
  name: "John Doe",
  title: "Senior Software Engineer",
  contact: {
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    links: {
      GitHub: "https://github.com/johndoe",
      LinkedIn: "https://linkedin.com/in/johndoe",
    }
  }
}

describe('Header Component', () => {
  it('renders personal information correctly', () => {
    render(<Header personalInfo={mockPersonalInfo} />)
    
    expect(screen.getByText(mockPersonalInfo.name)).toBeInTheDocument()
    expect(screen.getByText(mockPersonalInfo.title)).toBeInTheDocument()
    expect(screen.getByText(mockPersonalInfo.contact.email)).toBeInTheDocument()
    expect(screen.getByText(mockPersonalInfo.contact.phone)).toBeInTheDocument()
    expect(screen.getByText(mockPersonalInfo.contact.location)).toBeInTheDocument()
  })

  it('has basic accessibility features', () => {
    render(<Header personalInfo={mockPersonalInfo} />)
    
    // Check for semantic heading
    expect(screen.getByRole('heading', { name: mockPersonalInfo.name })).toBeInTheDocument()
    
    // Check for links
    Object.entries(mockPersonalInfo.contact.links).forEach(([platform, url]) => {
      const link = screen.getByRole('link', { name: new RegExp(platform, 'i') })
      expect(link).toHaveAttribute('href', url)
    })
  })
}) 