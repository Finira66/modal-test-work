<template>
  <input
    :value="modelValue"
    class="input"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "UiInput",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  display: block;
  margin-bottom: 14px;
  font-size: 16px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
