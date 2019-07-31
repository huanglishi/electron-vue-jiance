<template>
  <div :class="['description-list', size, layout === 'vertical' ? 'vertical': 'horizontal']">
    <div v-if="title" class="title">{{ title }}</div>
    <a-row>
      <slot></slot>
    </a-row>
  </div>
</template>

<script>
import { Col } from 'ant-design-vue/es/grid/'

const Item = {
  name: 'DetailListItem',
  props: {
    term: {
      type: String,
      default: '',
      required: false
    }
  },
  inject: {
    col: {
      type: Number
    }
  },
  render () {
    return (
      <Col {...{ props: responsive[this.col] }}>
        <div class="term">{this.$props.term}</div>
        <div class="content">{this.$slots.default}</div>
      </Col>
    )
  }
}

const responsive = {
  1: { xs: 24 },
  2: { xs: 24, sm: 12 },
  3: { xs: 24, sm: 12, md: 8 },
  4: { xs: 24, sm: 12, md: 6 }
}

export default {
  name: 'DetailList',
  Item: Item,
  components: {
    Col
  },
  props: {
    title: {
      type: String,
      default: '',
      required: false
    },
    col: {
      type: Number,
      required: false,
      default: 3
    },
    size: {
      type: String,
      required: false,
      default: 'large'
    },
    layout: {
      type: String,
      required: false,
      default: 'horizontal'
    }
  },
  provide () {
    return {
      col: this.col > 4 ? 4 : this.col
    }
  }
}
</script>

