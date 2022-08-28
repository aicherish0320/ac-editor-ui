import { App } from 'vue'
import AcImage from './AcImage.vue'

AcImage.install = (app: App) => {
  app.component(AcImage.name, AcImage)
}

export default AcImage
