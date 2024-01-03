<template>
  <button
    :class="{
      'add-button': type === 'add-button',
      'delete-button': type === 'delete-button',
    }"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
  },
  methods: {
    handleClick() {
      this.$emit("click", this.action);
    },
  },
};
</script>

<style scoped>
.add-button {
  border-radius: 4px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #45a049;
}

.delete-button {
  border-radius: 4px;
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #d32f2f;
}
</style>
