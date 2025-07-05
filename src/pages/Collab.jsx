import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Collab () {
  const [roomId, setRoomId] = useState('')
  const navigate = useNavigate()

  console.log("✅ Collab Page Loaded")

  const joinRoom = () => {
    if (roomId.trim()) {
      navigate(`/realtime/${roomId.trim()}`)
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Join a Real-Time Drawing Room</h2>
      <input
        type="text"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button onClick={joinRoom} style={{ marginLeft: 10 }}>Join</button>
    </div>
  )
}

export default Collab
