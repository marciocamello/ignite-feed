import React from 'react'

import styles from './Avatar.module.css';

export function Avatar({
    src = "https://github.com/marciocamello.png",
    hasBorder = true,
}) {
    
  return (
    <img 
        className={
            hasBorder ? styles.avatarWithBorder : styles.avatar
        } 
        src={src}
     />
  )
}
