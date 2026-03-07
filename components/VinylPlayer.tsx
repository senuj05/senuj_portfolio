'use client'

import { useState, useRef } from 'react'

const SAMPLE_PLAYLISTS = [
  {
    id: 'sample-1',
    name: 'Acoustic Ambient',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX4E3UdUs7fUx',
    embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4E3UdUs7fUx?utm_source=generator&theme=0',
    type: 'playlist',
    color: '#a8d8b9',
  },
  {
    id: 'sample-2',
    name: 'Lo-fi Focus',
    spotifyUrl: 'https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4euo8CF',
    embedUrl: 'https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4euo8CF?utm_source=generator&theme=0',
    type: 'playlist',
    color: '#c9b8f0',
  },
]

function parseSpotifyUrl(url: string) {
  try {
    const u = new URL(url.trim())
    if (!u.hostname.includes('spotify.com')) return null
    const parts = u.pathname.split('/').filter(Boolean)
    if (parts.length >= 2) {
      const type = parts[0]
      const id = parts[1].split('?')[0]
      if (['playlist', 'album', 'track', 'artist'].includes(type) && id) {
        return {
          embedUrl: `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`,
          type,
          id,
        }
      }
    }
  } catch {
    // ignore
  }
  return null
}

const EMOJI = '😊' // Change to your emoji

function EmojiDisc({ spinning }: { spinning: boolean }) {
  return (
    <div
      style={{
        width: 70,
        height: 70,
        borderRadius: '50%',
        flexShrink: 0,
        background: 'linear-gradient(145deg, #f5e642, #e6d630)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(230, 214, 48, 0.4), 0 0 0 2px rgba(0,0,0,0.08)',
        animation: spinning ? 'vinyl-spin 3s linear infinite' : 'none',
      }}
    >
      <span style={{ fontSize: 36, lineHeight: 1 }}>{EMOJI}</span>
    </div>
  )
}

function SpeakerDots() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 4px)', gap: '4px', padding: 4 }}>
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          style={{ width: 4, height: 4, borderRadius: '50%', background: '#c8c2b6' }}
        />
      ))}
    </div>
  )
}

const COLORS = ['#a8d8b9', '#c9b8f0', '#f0c8a8', '#a8c8f0', '#f0a8c8', '#d8f0a8', '#f0e0a8', '#f0b8b8']

interface VinylPlayerProps {
  embedded?: boolean
}

export default function VinylPlayer({ embedded = false }: VinylPlayerProps) {
  const [playlists, setPlaylists] = useState(SAMPLE_PLAYLISTS)
  const [activeId, setActiveId] = useState(SAMPLE_PLAYLISTS[0].id)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [urlInput, setUrlInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [urlError, setUrlError] = useState('')
  const colorIdx = useRef(2)

  const active = playlists.find((p) => p.id === activeId) || playlists[0]

  const handleAdd = () => {
    setUrlError('')
    const parsed = parseSpotifyUrl(urlInput)
    if (!parsed) {
      setUrlError("Couldn't read this link. Try: open.spotify.com/playlist/...")
      return
    }
    const name = nameInput.trim() || `My ${parsed.type.charAt(0).toUpperCase() + parsed.type.slice(1)}`
    const color = COLORS[colorIdx.current % COLORS.length]
    colorIdx.current++
    const newP = {
      id: Date.now().toString(),
      name,
      embedUrl: parsed.embedUrl,
      spotifyUrl: urlInput.trim(),
      type: parsed.type,
      color,
    }
    setPlaylists((p) => [...p, newP])
    setActiveId(newP.id)
    setUrlInput('')
    setNameInput('')
    setShowAdd(false)
    setIsPlaying(false)
  }

  const handleDelete = (id: string) => {
    setPlaylists((prev) => {
      const next = prev.filter((x) => x.id !== id)
      if (activeId === id && next.length > 0) setActiveId(next[0].id)
      return next
    })
  }

  return (
    <div className={embedded ? 'cursor-visible' : 'fixed bottom-6 right-6 z-40 cursor-visible'}>
      <style>{`
        @keyframes vinyl-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>

      <div
        className="overflow-hidden rounded-2xl shadow-lg"
        style={{
          fontFamily: "'Georgia', serif",
          background: 'linear-gradient(145deg,#ede8df,#e4dfd5)',
          width: isExpanded ? 300 : 200,
          transition: 'width 0.25s ease',
        }}
      >
        {/* Compact player card */}
        <div
          style={{
            background: '#f5f1ea',
            padding: '12px 14px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <EmojiDisc spinning={isPlaying} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, opacity: 0.45 }}>
              <div style={{ width: 2, height: 24, background: '#bbb', borderRadius: 2 }} />
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#aaa' }} />
            </div>
            <SpeakerDots />
          </div>

          <div style={{ marginBottom: 8, paddingLeft: 2 }}>
            <div style={{ fontSize: 9, color: '#b0a898', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 1 }}>
              Now playing
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: '#2a2520',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {active?.name || '-'}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              type="button"
              onClick={() => setIsPlaying((v) => !v)}
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: 'none',
                flexShrink: 0,
                background: `linear-gradient(135deg, ${active?.color || '#c9b8f0'} 30%, #c0b0e8)`,
                color: '#fff',
                fontSize: 14,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 3px 12px ${active?.color || '#c9b8f0'}99`,
              }}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              type="button"
              onClick={() => setIsExpanded((v) => !v)}
              style={{
                padding: '4px 10px',
                borderRadius: 12,
                border: '1px solid #d0cac0',
                background: '#fff',
                fontSize: 10,
                color: '#888',
                cursor: 'pointer',
              }}
            >
              {isExpanded ? '▲ Less' : '▼ More'}
            </button>
          </div>
        </div>

        {isExpanded && (
          <>
            {/* Playlist chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '8px 14px 6px' }}>
              {playlists.map((p) => (
                <div
                  key={p.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setActiveId(p.id)
                    setIsPlaying(false)
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && (setActiveId(p.id), setIsPlaying(false))}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '4px 8px 4px 6px',
                    borderRadius: 16,
                    cursor: 'pointer',
                    background: p.id === activeId ? p.color : '#f0ece3',
                    border: `1.5px solid ${p.id === activeId ? p.color : '#e0dbd0'}`,
                    maxWidth: 160,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: p.id === activeId ? 'rgba(0,0,0,0.2)' : p.color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 10,
                      color: p.id === activeId ? '#222' : '#555',
                      fontWeight: p.id === activeId ? 600 : 400,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.name}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(p.id)
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 12,
                      color: p.id === activeId ? 'rgba(0,0,0,0.3)' : '#ccc',
                      padding: 0,
                      lineHeight: 1,
                      marginLeft: 2,
                      flexShrink: 0,
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setShowAdd((v) => !v)}
                style={{
                  padding: '4px 10px',
                  borderRadius: 16,
                  border: '1.5px dashed #ccc7bc',
                  background: showAdd ? '#fff' : 'transparent',
                  fontSize: 10,
                  color: '#888',
                  cursor: 'pointer',
                }}
              >
                {showAdd ? '✕' : '+ Add'}
              </button>
            </div>

            {showAdd && (
              <div
                style={{
                  background: '#fff',
                  margin: '0 14px 10px',
                  padding: 12,
                  borderRadius: 12,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                }}
              >
                <input
                  value={urlInput}
                  onChange={(e) => {
                    setUrlInput(e.target.value)
                    setUrlError('')
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                  placeholder="Spotify link..."
                  style={{
                    width: '100%',
                    padding: '6px 8px',
                    borderRadius: 8,
                    border: `1.5px solid ${urlError ? '#e57373' : '#e5e0d8'}`,
                    fontSize: 11,
                    marginBottom: 6,
                  }}
                />
                {urlError && <div style={{ fontSize: 10, color: '#e57373', marginBottom: 6 }}>{urlError}</div>}
                <button
                  type="button"
                  onClick={handleAdd}
                  style={{
                    width: '100%',
                    padding: 6,
                    borderRadius: 8,
                    border: 'none',
                    background: urlInput.trim() ? 'linear-gradient(135deg,#9b7de8,#6b47b8)' : '#e5e0d8',
                    color: urlInput.trim() ? '#fff' : '#bbb',
                    fontSize: 11,
                    fontWeight: 600,
                    cursor: urlInput.trim() ? 'pointer' : 'default',
                  }}
                >
                  Add
                </button>
              </div>
            )}

            {/* Spotify embed */}
            {active && (
              <div style={{ padding: '0 14px 14px' }}>
                <iframe
                  key={active.embedUrl}
                  src={active.embedUrl}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ display: 'block', borderRadius: 12, overflow: 'hidden' }}
                  title="Spotify"
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
