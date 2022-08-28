import { App } from 'vue'
import AcText from './components/ac-text'
import AcImage from './components/ac-image'

const components = [AcText, AcImage]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export { AcText, AcImage, install }

export default {
  install
}
