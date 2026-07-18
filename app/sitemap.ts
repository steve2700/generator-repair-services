import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.generatorrepairservices.co.za'
  const currentDate = new Date().toISOString()

  const mainPages = [
    { url: baseUrl,                                        priority: 1.0, changeFrequency: 'weekly'  as const },
    { url: `${baseUrl}/services`,                          priority: 0.9, changeFrequency: 'weekly'  as const },
    { url: `${baseUrl}/areas`,                             priority: 0.9, changeFrequency: 'weekly'  as const },
    { url: `${baseUrl}/generator-repair-cost`,             priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/generator-repairs-near-me`,         priority: 0.9, changeFrequency: 'weekly'  as const },
    { url: `${baseUrl}/contact`,                           priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/gallery`,                           priority: 0.8, changeFrequency: 'weekly'  as const },
    { url: `${baseUrl}/faq`,                               priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/about`,                             priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/privacy-policy`,                    priority: 0.3, changeFrequency: 'yearly'  as const },
    { url: `${baseUrl}/terms`,                             priority: 0.3, changeFrequency: 'yearly'  as const },
  ]

  const servicePages = [
    'generator-repairs',
    'generator-servicing',
    'generator-maintenance',
    'emergency-generator-repair',
    'generator-installation',
    'load-bank-testing',
    'avr-repairs',
    'control-panel-repairs',
    'fuel-system-repairs',
    'generator-rewinding',
  ].map((service) => ({
    url: `${baseUrl}/${service}`,
    priority: 0.85,
    changeFrequency: 'weekly' as const,
  }))

  const areaPages = [
    'johannesburg',
    'pretoria',
    'sandton',
    'midrand',
    'centurion',
    'randburg',
    'roodepoort',
    'kempton-park',
    'boksburg',
    'benoni',
    'germiston',
    'alberton',
    'edenvale',
    'krugersdorp',
    'springs',
    'soweto',
    'fourways',
    'vereeniging',
  ].map((area) => ({
    url: `${baseUrl}/generator-repairs-${area}`,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  }))

  return [...mainPages, ...servicePages, ...areaPages].map((page) => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
