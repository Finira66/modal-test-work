<template>
  <div class="wrapper">
    <ui-button class="main-button" type="button" @click="showModal"
      >Open modal</ui-button
    >

    <MainModal v-if="isModalVisible" :submit="submit" @close="closeModal">
      <template #header>
        <div class="title">Modal component</div>
      </template>

      <template #default>
        <ui-input v-model="form.email" placeholder="E-mail" type="text" />
        <p
          v-for="error of v$.email.$errors"
          :key="error.$uid"
          class="error-text"
        >
          {{ error.$message }}
        </p>

        <ui-input
          v-model="form.password"
          autocomplete="true"
          placeholder="Password"
          type="password"
        />
        <p
          v-for="error of v$.password.$errors"
          :key="error.$uid"
          class="error-text"
        >
          {{ error.$message }}
        </p>
      </template>

      <template #footer>
        <ui-button>Submit</ui-button>
      </template>
    </MainModal>
  </div>
</template>

<script>
import MainModal from "@/components/MainModal.vue";
import { ref, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

export default {
  components: { MainModal },
  setup() {
    const isModalVisible = ref(false);

    const form = reactive({
      email: "",
      password: "",
    });

    const rules = {
      email: { required, email },
      password: { required },
    };

    const v$ = useVuelidate(rules, form);

    async function getData(data) {
      await delay(1000);
      return data;
    }

    function showModal() {
      isModalVisible.value = true;
    }

    function closeModal() {
      isModalVisible.value = false;
      form.email = "";
      form.password = "";
    }

    async function submit() {
      const isFormCorrect = await v$.value.$validate();

      if (!isFormCorrect) {
        console.log("form skipped");
        return;
      }

      try {
        const result = await getData(form);
        console.log("Success: ", result);
        closeModal();
      } catch (err) {
        console.log("Error: ", err);
      }
    }

    return {
      isModalVisible,
      showModal,
      closeModal,
      form,
      submit,
      v$,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/styles/normalize.css";

body {
  font-size: 16px;
  font-family: sans-serif;
}

.wrapper {
  padding: 40px;
}

.title {
  font-size: 24px;
  color: #000;
  font-weight: 500;
  text-align: center;
  margin-bottom: 34px;
}

.error-text {
  margin-bottom: 20px;
  color: #bd0202;
}

.main-button {
  max-width: 150px;
  margin: 0;
}
</style>
