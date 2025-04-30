import {cleanup} from '@testing-library/react'
import {afterEach, beforeEach, vi} from 'vitest'

beforeEach(() => {
    cleanup()
    vi.resetAllMocks()
})

afterEach(() => {
    vi.resetAllMocks()
})