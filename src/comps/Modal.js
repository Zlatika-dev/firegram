import React from 'react'

const Modal = ({selectImg, setSelectImg}) => {
  const handleClick = (e) =>{
    if(e.target.classList.contains('backdrop'))
    setSelectImg(null)
  }

  return (
    <div className="backdrop"
    onClick={handleClick}>
      <img src={selectImg} alt="pic" />
    </div>
  )
}

export default Modal
