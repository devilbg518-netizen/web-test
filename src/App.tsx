import { useEffect, useState } from 'react'

type Page = 'home' | 'downloads'

const downloads = [
  {
    number: '01',
    title: 'Основен пакет',
    description: 'Версия 2.4 · 48 МБ',
    icon: 'bolt',
  },
  {
    number: '02',
    title: 'Графичен пакет',
    description: 'Версия 1.8 · 126 МБ',
    icon: 'image',
  },
  {
    number: '03',
    title: 'Звуков пакет',
    description: 'Версия 3.1 · 84 МБ',
    icon: 'sound',
  },
  {
    number: '04',
    title: 'Бонус съдържание',
    description: 'Версия 1.2 · 32 МБ',
    icon: 'gift',
  },
]

function BrandMark() {
  return (
    <svg viewBox="0 0 34 34" aria-hidden="true">
      <path d="M8 13.5 12.5 8h9L26 13.5l2 9.5-4 3-4-5h-6l-4 5-4-3 2-9.5Z" />
      <path d="M11 14.5v5m-2.5-2.5h5M22.5 16h.1m2.4 3h.1" />
    </svg>
  )
}

function ControllerArt() {
  return (
    <div className="controller-scene" aria-hidden="true">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <span className="spark spark-one" />
      <span className="spark spark-two" />
      <span className="spark spark-three" />
      <svg className="controller" viewBox="0 0 620 440">
        <defs>
          <linearGradient id="body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f7f8ff" />
            <stop offset=".48" stopColor="#c7ccdf" />
            <stop offset="1" stopColor="#737a96" />
          </linearGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#92f2ff" />
            <stop offset=".5" stopColor="#5677ff" />
            <stop offset="1" stopColor="#b14cff" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path className="controller-glow" d="M108 133c35-43 88-55 145-32 30 12 84 12 114 0 57-23 110-11 145 32 49 60 62 188 24 237-24 31-61 20-84-15l-47-72H215l-47 72c-23 35-60 46-84 15-38-49-25-177 24-237Z" />
        <path fill="url(#edge)" d="M108 123c35-43 88-55 145-32 30 12 84 12 114 0 57-23 110-11 145 32 49 60 62 188 24 237-24 31-61 20-84-15l-47-72H215l-47 72c-23 35-60 46-84 15-38-49-25-177 24-237Z" />
        <path fill="url(#body)" d="M112 116c34-38 86-48 137-27 33 14 89 14 122 0 51-21 103-11 137 27 46 52 59 169 25 218-20 29-50 19-70-13l-50-79H207l-50 79c-20 32-50 42-70 13-34-49-21-166 25-218Z" />
        <path fill="#10152a" d="M168 153h30v28h28v30h-28v29h-30v-29h-29v-30h29z" />
        <circle cx="429" cy="162" r="17" fill="#795cff" />
        <circle cx="470" cy="201" r="17" fill="#42d7ff" />
        <circle cx="388" cy="201" r="17" fill="#e15cff" />
        <circle cx="429" cy="240" r="17" fill="#67f0c0" />
        <circle cx="251" cy="245" r="39" fill="#202640" />
        <circle cx="251" cy="245" r="26" fill="#3f4764" />
        <circle cx="360" cy="245" r="39" fill="#202640" />
        <circle cx="360" cy="245" r="26" fill="#3f4764" />
        <rect x="276" y="150" width="68" height="16" rx="8" fill="#8e95ad" />
        <circle cx="310" cy="201" r="11" fill="#7480ff" filter="url(#glow)" />
      </svg>
    </div>
  )
}

function DownloadIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    bolt: <path d="M14 2 5 15h7l-1 7 9-13h-7l1-7Z" />,
    image: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <circle cx="9" cy="10" r="2" />
        <path d="m4 17 5-4 3 3 3-3 5 4" />
      </>
    ),
    sound: (
      <>
        <path d="M5 10v4h4l5 4V6l-5 4H5Z" />
        <path d="M17 9c1.3 1.7 1.3 4.3 0 6M20 6c3.2 3.3 3.2 8.7 0 12" />
      </>
    ),
    gift: (
      <>
        <path d="M4 10h16v11H4zM3 6h18v4H3zM12 6v15" />
        <path d="M12 6c-1-4-6-4-6-1 0 2 3 2 6 1Zm0 0c1-4 6-4 6-1 0 2-3 2-6 1Z" />
      </>
    ),
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

function ArrowIcon({ down = false }: { down?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {down ? <path d="M12 3v14m-5-5 5 5 5-5M5 21h14" /> : <path d="M5 12h14m-5-5 5 5-5 5" />}
    </svg>
  )
}

export default function App() {
  const pageFromHash = (): Page => (window.location.hash === '#downloads' ? 'downloads' : 'home')
  const [page, setPage] = useState<Page>(pageFromHash)

  useEffect(() => {
    const onHashChange = () => setPage(pageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const goTo = (nextPage: Page) => {
    window.location.hash = nextPage === 'downloads' ? 'downloads' : 'home'
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <header className="navbar">
        <button className="brand" onClick={() => goTo('home')} aria-label="Към началната страница">
          <span className="brand-icon"><BrandMark /></span>
          <span>НЕОН ПЛЕЙ</span>
        </button>
        <nav aria-label="Основна навигация">
          <button className={page === 'home' ? 'active' : ''} onClick={() => goTo('home')}>Начало</button>
          <button className={page === 'downloads' ? 'active' : ''} onClick={() => goTo('downloads')}>Изтегляния</button>
        </nav>
        <span className="status-pill"><i /> СИСТЕМА ОНЛАЙН</span>
      </header>

      <main key={page} className="page">
        {page === 'home' ? (
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow"><span>НОВО</span> ТВОЯТ ПОРТАЛ КЪМ ИГРАТА</div>
              <h1>ИГРАЙ БЕЗ<br /><strong>ГРАНИЦИ.</strong></h1>
              <p>Открий подбрани файлове, актуализации и бонуси. Всичко необходимо за следващото ти гейминг изживяване — на едно място.</p>
              <div className="hero-actions">
                <button className="primary-button" onClick={() => goTo('downloads')}>
                  Към изтеглянията <ArrowIcon />
                </button>
                <span>БЪРЗО <b>·</b> СИГУРНО <b>·</b> БЕЗПЛАТНО</span>
              </div>
            </div>
            <ControllerArt />
            <div className="scroll-cue"><span>РАЗГЛЕДАЙ</span><i /></div>
          </section>
        ) : (
          <section className="downloads-page">
            <div className="downloads-heading">
              <div>
                <div className="eyebrow"><span>АРХИВ</span> ПОСЛЕДНИ ВЕРСИИ</div>
                <h1>Зона за <strong>изтегляне</strong></h1>
              </div>
              <p>Избери своя пакет и започни. Всички файлове са проверени и готови за употреба.</p>
            </div>
            <div className="download-grid">
              {downloads.map((item) => (
                <article className="download-card" key={item.number}>
                  <span className="card-number">{item.number}</span>
                  <div className="download-icon"><DownloadIcon name={item.icon} /></div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <button className="download-button">
                    Изтегли <ArrowIcon down />
                  </button>
                </article>
              ))}
            </div>
            <p className="security-note"><span>✓</span> Всички файлове са проверени за сигурност</p>
          </section>
        )}
      </main>
    </div>
  )
}
