<template>
  <img
    class="ac-image-component"
    :style="styleProps"
    :src="src"
    alt="acImage"
    @click.prevent="handleClick"
  />
</template>

<script lang="ts">
import {
  imageDefaultProps,
  imageStylePropsNames,
  transformToComponentProps
} from '@/defaultProps'
import useComponentCommon from '@/hooks/useComponentCommon'
import { defineComponent } from 'vue'

const defaultProps = transformToComponentProps(imageDefaultProps)

export default defineComponent({
  name: 'AcImage',
  props: {
    ...defaultProps
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      imageStylePropsNames
    )
    return {
      styleProps,
      handleClick
    }
  }
})
</script>

<style scoped>
.l-image-component {
  max-width: 100%;
  position: relative !important;
}
</style>
