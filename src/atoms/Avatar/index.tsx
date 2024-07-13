import React from 'react'
import clsx from 'clsx'
import Image, { type ImageProps } from 'next/image';

type AvatarProps = Omit<ImageProps, 'alt'> & {
  alt?: string
  size?: 32 | 48 | 64 | 96 | 128
  square?: boolean
  rounded?: boolean
}

const Avatar = ({ alt = '', size = 64, square = false, rounded = false, ...rest }: AvatarProps) => {
  const rootClassName = clsx({
    'rounded-full': rounded,
    'rounded-lg': !square && !rounded,
  }, `is-${size}x${size}`, 'img-cover')

  return <Image alt={alt} className={rootClassName} width={size} height={size} {...rest} />
}

export default Avatar