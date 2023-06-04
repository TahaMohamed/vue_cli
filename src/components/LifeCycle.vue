<template>
  <div class="life" style="margin-top: 10px">
    <h2>Life Component</h2>
    <p>Age = {{ age }}</p>
    <button @click="age++">Increment Age</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Ahmed",
      age: 29,
    };
  },
  beforeCreate() {
    console.log("Before Created");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("Before Mount");
  },
  mounted() {
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("Before Update");
  },
  updated() {
    console.log("Updated");
  },
  beforeUnmount() {
    console.log("Before Unmount");
  },
  unmounted() {
    console.log("Unmounted");
  },
};
</script>
