import Image from 'next/image'
import { useEffect } from 'react'

declare global {
  interface Window {
    bf_ReporterPlugin?: {
      toggleButterflyReporter: (apiKey: string) => void
    }
  }
}

const ButterflyButton = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://butterfly-button.web.app/cdn/butterfly-plugin.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.bf_ReporterPlugin) {
      window.bf_ReporterPlugin.toggleButterflyReporter(
        process.env.NEXT_PUBLIC_BUTTERFLY_API_KEY || ''
      )
    }
  }

  return (
    <Image
      onClick={handleClick}
      src="https://butterfly-button.web.app/img/butterfly-logo-200.png"
      width={50}
      height={50}
      style={{
        cursor: 'pointer',
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
      alt="The Butterfly Button"
    />
  )
}

export default ButterflyButton
