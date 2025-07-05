import React from 'react'
import RealTimeComp from '../components/RealTimeComp'
import { useParams } from 'react-router-dom'

function RealTime () {
  const { roomId } = useParams()

  console.log("✅ RealTime Page Loaded with roomId:", roomId)

  return (
    <>
      <RealTimeComp roomId={roomId} />
    </>
  )
}

export default RealTime
