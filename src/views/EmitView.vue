<template>
  <div class="about">
    <h1>Emit Page</h1>
    <hr />
    <app-content
      :students="students"
      @updateParentActive="changeActive"
      @AddNewStudent="appendStudent"
      :isActive="isActive"
    />
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
  methods: {
    changeActive() {
      this.isActive = !this.isActive;
    },
    appendStudent(student) {
      this.students[this.students.length] = student;
    },
  },
};
</script>
