/**
 * @type {import('next').NextConfig}
 */

/**
 * TODO: remove .babelrc and replace it with swc
 */
// const isProd = process.env.NODE_ENV === 'production'

const REQUIRED_CONFIG = {
  reactStrictMode: true, // true | false
  env: {
    SITE_NAME: 'Malvis Attorneys',
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL
  }
}

module.exports = REQUIRED_CONFIG
