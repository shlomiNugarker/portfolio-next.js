import { memo } from 'react'
import Detail from './Detail'
import Avatar from 'components/Avatar'

const AboutSection = () => {
  return (
    <>
      <Detail />
      <Avatar />
    </>
  )
}
export default memo(AboutSection)
