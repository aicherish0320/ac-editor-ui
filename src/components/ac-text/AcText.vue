<template>
  <component
    :is="tag"
    :style="styleProps"
    class="ac-text-component"
    @click="handleClick"
    >{{ text }}</component
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  transformToComponentProps,
  textDefaultProps,
  textStylePropsNames
} from '@/defaultProps'
import useComponentCommon from '@/hooks/useComponentCommon'

const defaultProps = transformToComponentProps(textDefaultProps)

export default defineComponent({
  name: 'AcText',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    ...defaultProps
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      textStylePropsNames
    )
    return { styleProps, handleClick }
  }
})
</script>

<style scoped>
h2.ac-text-component,
p.ac-text-component {
  margin-bottom: 0;
}
button.ac-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.ac-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
}
</style>
