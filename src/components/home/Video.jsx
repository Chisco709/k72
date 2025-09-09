import React from 'react'
import OptimizedVideo from '../common/OptimizedVideo'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <OptimizedVideo
        src="/renevideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        loadingIndicatorSize="lg"
        className="h-full w-full"
      />
    </div>
  )
}

export default Video