import React from 'react'
import { ClipLoader } from 'react-spinners'

type Props = {}

function Loading({}: Props) {
  return (
    <ClipLoader
        color={'green'}
        loading={true}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Loading