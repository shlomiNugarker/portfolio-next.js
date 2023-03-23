import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const [page, setPage] = useState(router.pathname)
  useEffect(() => {
    if (page !== router.pathname) setPage(router.pathname)
  }, [page, router.pathname])

  return (
    <div className="header">
      <nav>
        <Link href={'/'}>
          <div>SN</div>
          <h3>Shlomi Nugarker</h3>
        </Link>
        <Link
          href={'/'}
          className={page === '/' ? 'selected' : ''}
          onClick={() => setPage('/')}
        >
          <h3>About</h3>
        </Link>
        <Link
          href={'/projects'}
          className={page === '/projects' ? 'selected' : ''}
          onClick={() => setPage('/projects')}
        >
          <h3>Projects</h3>
        </Link>
      </nav>
    </div>
  )
}
