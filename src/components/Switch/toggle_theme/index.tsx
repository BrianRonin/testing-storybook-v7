import * as S from './styles'
export * as S from './styles'
export * as mock from './mock'

import { Toggle } from '../toggle_0'
import { useContext } from 'react'
import { if_window } from '../../../utils/is-window'
import { Context } from '../../../contexts/theme/theme'

export const ToggleTheme = () => {
  const { setTheme } = useContext(Context)
  const changeTheme = (check: boolean) => {
    return if_window(() => {
      localStorage.setItem('myCat', 'Tom')
      setTheme(check ? 'dark' : 'light')
    })
  }

  const currentTheme = (): boolean => {
    return if_window(
      () => {
        const localTheme =
          localStorage.getItem('theme')
        if (!localTheme) return false
        const newTheme = JSON.parse(localTheme)
        return newTheme.name === 'dark'
      },
      () => false
    ) as boolean
  }

  return (
    <S.Main>
      <Toggle
        onChange={changeTheme}
        initialValue={currentTheme}
      />
    </S.Main>
  )
}
