import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals'],
		plugins: ['@typescript-eslint'],
    rules: {
      // Add your rules here
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off', // not needed in Next.js
    },
  }),
]

export default eslintConfig