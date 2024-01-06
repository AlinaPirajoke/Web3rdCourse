<script>
export default {
  data: () => ({
    formData: {
      username: '',
      surname: '',
      age: null,
      sex: '',
      frameworks: []
    },
    sexOptions: Object.freeze({
      M: 'M',
      F: 'F'
    }),
    frameWorksOptions: Object.freeze({
      VUE: 'Vue',
      ANGULAR: 'ANGULAR',
      SVELTE: 'SVELTE',
      REACT: 'REACT'
    })
  }),
  methods: {
    verify() {
      if (this.errors.length === 0)
        alert("Типа отправленно!");
      else
        alert("Некорректная форма!");
    }
  },
  computed: {
    errors() {
      const errors = []
      if (!this.formData.name) errors.push({ field: 'name', message: 'Введите имя!' })
      else errors.filter((error) => error.field !== 'name')

      if (!this.formData.surname) errors.push({ field: 'surname', message: 'Введите фамилию!' })
      else errors.filter((error) => error.field !== 'surname')

      if (!this.formData.age && typeof this.formData.age !== 'number')
        errors.push({ field: 'age', message: 'Укажите возраст!' })
      else errors.filter((error) => error.field !== 'age')

      if (!this.formData.sex) errors.push({ field: 'sex', message: 'Укажите пол!' })
      else errors.filter((error) => error.field !== 'sex')

      return errors
    }
  }
}
</script>

<template>
  <div class="horizontal-center-div">
    <form class="formDiv">
      <h1>Введите данные</h1>
      <div class="formOption">
        <p>Имя:</p>
        <input type="text" v-model="formData.name" />
      </div>
      <div class="formOption">
        <p>Фамилия:</p>
        <input type="text" v-model="formData.surname" />
      </div>
      <div class="formOption">
        <p>Возраст:</p>
        <input type="number" v-model="formData.age" />
      </div>

      <div class="formRow">
        <p>Пол:</p>
        <input type="radio" v-model="formData.sex" name="sex" id="M" />
        <label for="M">M</label>
        <input type="radio" v-model="formData.sex" name="sex" id="F" />
        <label for="F">Ж</label>
      </div>
      <div class="formOption">
        <p>Фреймворк:</p>
        <div v-for="option in frameWorksOptions" v-bind:key="option">
          <input type="checkbox" v-model="formData.frameworks" :value="option" />
          {{ option }}
        </div>
      </div>
      <button :onclick="verify" class="button">Отправить</button>
    </form>
  </div>
  <div class="column">
    <div class="errorDiv" v-for="error in errors" v-bind:key="error.field">
      {{ error.message }}
    </div>
  </div>
</template>

<style>
.formDiv {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-content: center; */
  align-items: center;
  margin-top: 100px;
  padding: 30px;
  background-color: #36bac4;
  border-radius: 10px;
  min-width: 400px;
}

.errorDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  background-color: #ff6262;
  border-radius: 10px;
  width: 420px;
  max-height: 60;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.button{
  background-color: aliceblue;
  width: 100px;
  height: 30px;
  margin: 20px;
}

.column{
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
}

#app {
  height: 100%;
  width: 100%;
}

.formOption {
  padding: 15px;
}
</style>
