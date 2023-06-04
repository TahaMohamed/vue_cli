<template>
  <div class="parent">
    <slot name="slotName1"></slot>
    <h2>This is slot component</h2>
    <slot name="slotName2"></slot>
    <p>Passed name is: {{ name }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
};
</script>
