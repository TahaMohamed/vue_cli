<template>
  <div class="main-page">
    <h1>Home Page</h1>
    <app-content :students="students" />
    <hr />
    <life-cycle />
  </div>
</template>

<script>
import AppContent from "@/components/AppContent.vue";
import LifeCycle from "@/components/LifeCycle.vue";
export default {
  components: {
    AppContent,
    LifeCycle,
  },
  data() {
    return {
      students: ["Ahmed", "Ali", "Sami"],
    };
  },
};
</script>
