import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: '#bc89ff',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './whiteheart.png',
  fullDecal: './heart.png',
})

export default state
