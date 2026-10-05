// Set VITE_SITE_URL at build time when the portfolio has a confirmed domain.
export const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || null
