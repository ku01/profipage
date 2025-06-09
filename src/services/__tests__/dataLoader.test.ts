import {beforeEach, describe, expect, it, vi} from 'vitest'
import {DataLoadError, loadProfileData} from '../dataLoader'

// Mock fetch globally
global.fetch = vi.fn()

describe('Data Loader Error Handling', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should throw DataLoadError when fetch fails', async () => {
    // Mock fetch to fail
    vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'))

    await expect(loadProfileData()).rejects.toThrow(DataLoadError)
    await expect(loadProfileData()).rejects.toThrow('Failed to load required data files')
  })

  it('should throw DataLoadError when response is not ok', async () => {
    // Mock fetch to return 404
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found'
    } as Response)

    await expect(loadProfileData()).rejects.toThrow(DataLoadError)
  })

  it('should throw DataLoadError when JSON parsing fails', async () => {
    // Mock fetch to return invalid JSON
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockRejectedValue(new Error('Invalid JSON'))
    } as unknown as Response)

    await expect(loadProfileData()).rejects.toThrow(DataLoadError)
  })

  it('DataLoadError should have correct properties', () => {
    const originalError = new Error('Original error')
    const dataLoadError = new DataLoadError('Test message', originalError)

    expect(dataLoadError.name).toBe('DataLoadError')
    expect(dataLoadError.message).toBe('Test message')
    expect(dataLoadError.cause).toBe(originalError)
  })
}) 