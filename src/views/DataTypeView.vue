<template>
  <div class="about">
    <h1>About Page</h1>
    <app-content :students="students" :isActive="isActive" />
    <hr />
    <app-content :students="students" :isActive="isActive" />
  </div>
</template>

<script>
import AppContent from "@/components/AppContent.vue";
export default {
  components: {
    AppContent,
  },
  data() {
    return {
      students: ["Cilia", "Taha", "Mohamed", "Mosa'd"],
      isActive: true,
    };
  },
};
</script>
