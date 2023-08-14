import React, {useRef} from 'react'
import Button from 'react-bootstrap/Button'

export default function PhotoUploader({onFileSelect}) {
  const fileInput = useRef(null)

  const handleFileInput = (e) => {
    onFileSelect(e.target.files[0])
  }

  return (
    <>
      <input ref={fileInput} type="file" onChange={handleFileInput} className="d-none"/>
      <Button onClick={e => fileInput.current && fileInput.current.click()}>Upload Photo</Button>
    </>
  )
}