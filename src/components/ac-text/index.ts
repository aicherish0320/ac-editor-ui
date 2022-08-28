import { App } from 'vue'
import AcText from './AcText.vue'

AcText.install = (app: App) => {
  app.component(AcText.name, AcText)
}

export default AcText
