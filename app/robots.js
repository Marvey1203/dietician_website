export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/Privacy-policy/',
      },
      sitemap: 'https://dietician-website-app.vercel.app/sitemap.xml',
    }
  }