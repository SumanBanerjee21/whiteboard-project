import React from 'react'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import { useSyncDemo } from '@tldraw/sync'

function RealTimeComp({ roomId }) {
  console.log("✅ RealTimeComp loaded with roomId:", roomId)

  const store = useSyncDemo({ roomId })

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw store={store} />
    </div>
  )
}

export default RealTimeComp
