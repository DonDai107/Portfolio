import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface Bio {
  name: string
  role: string
  content: unknown[]
  philosophy: string
}

export interface Project {
  _id: string
  title: string
  description: string
  mainImage: SanityImageSource
  technologies: string[]
  demoUrl: string
}

export interface Milestone {
  _id: string
  year: string
  title: string
  description: string
}
