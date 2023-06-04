<template>
  <nav class="my-nav">
    <div class="logo"><img src="@/assets/logo.png" /></div>
    <div class="links">
      <ul>
        <li v-for="link in links" :key="link">{{ link }}</li>
      </ul>
    </div>
    <div class="buttons">
      <button style="margin-right: 5px">Sign In</button>
      <button>Sign Up</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: ["Link One", "Link Two", "Link Three", "Link Four"],
    };
  },
};
</script>

<style scoped>
.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2c3e50;
  box-shadow: 0px 0px 9px -3px black;
  padding: 10px 5px;
  border-radius: 5px;
}

.my-nav ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
}

.my-nav ul > li {
  color: #cccccc;
}

.logo {
  margin-left: 15px;
  margin-top: 7px;
}

.logo img {
  width: 30px;
}

.buttons {
  margin-right: 15px;
  margin-top: 3px;
}
.buttons button {
  background-color: #cccccc;
  color: black;
  padding: 5px 10px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
}
</style>
