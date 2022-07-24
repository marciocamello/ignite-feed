import React from 'react'

export function AuthorInfo({author}) {
  return (
    <>
        {author && <>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
        </>}
    </>
  )
}
