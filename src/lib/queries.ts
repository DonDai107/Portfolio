import { groq } from 'next-sanity'

export const bioQuery = groq`*[_type == "bio"][0]`
export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc)`
export const milestonesQuery = groq`*[_type == "milestone"] | order(year desc)`
