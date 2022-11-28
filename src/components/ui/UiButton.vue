<template>
  <button class="button">Submit</button>
</template>

<script>
export default {
  name: "UiButton",
};
</script>

<style lang="scss" scoped>
.button {
  padding: 14px 20px;
  border-radius: 4px;
  width: 100%;
  margin: 0 auto;
  display: block;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  border: none;
  font-weight: 500;
  background: #296dc7;
  transition: 0.2s linear;

  &:hover {
    background: #2364b9;
  }
}
</style>
