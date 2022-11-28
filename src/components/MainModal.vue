<template>
  <transition appear>
    <div class="overlay" @click="close">
      <div class="modal" @click.stop>
        <button class="modal__close" @click="close">x</button>
        <div class="modal__top">
          <slot name="header"></slot>
        </div>
        <form class="modal__content">
          <slot></slot>
        </form>
        <slot name="footer"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MainModal",
  setup(_, context) {
    function close() {
      context.emit("close");
    }

    return {
      close,
    };
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 34px 44px 40px 44px;
  width: 100%;
  max-width: 500px;
  border-radius: 4px;

  &__content {
    margin-bottom: 30px;
  }

  &__top {
    padding: 0 32px;
  }

  &__close {
    position: absolute;
    right: 34px;
    top: 10px;
    background: transparent;
    border: none;
    font-weight: 700;
    font-size: 40px;
    cursor: pointer;
    z-index: 1;
    padding: 0;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
