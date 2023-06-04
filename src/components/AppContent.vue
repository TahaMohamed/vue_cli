<template>
  <div class="content">
    <!--    Change Reference data type-->
    <ul>
      <li v-for="(student, index) in stds" :key="index">{{ student }}</li>
    </ul>
    <button @click="shiftArray()">Change Ref Data Type</button>
    <!--    <p>{{ myActive }}</p>-->

    <!--    <button @click="() => (myActive = !myActive)">-->
    <!--      Change Primitive Data Type-->
    <!--    </button>-->
    <!--    &lt;!&ndash;    Or&ndash;&gt;-->
    <!--    <button @click="myActive = !myActive">Change Primitive Data Type</button>-->
    <!--    Emit Event-->
    <p>{{ isActive }}</p>
    <button @click="changeActive">Update Active Using Emit</button>
    <hr />
    <input
      type="text"
      v-model="student"
      @keydown.enter="$emit('AddNewStudent', student)"
    />
    <button @click="addStudent">Add Student</button>
  </div>
</template>

<script>
export default {
  props: {
    students: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
    },
  },
  emits: ["AddNewStudent"],
  data() {
    return {
      stds: this.students,
      student: "",
      // myActive: this.isActive,
    };
  },
  methods: {
    shiftArray() {
      this.stds.shift();
    },
    changeActive() {
      this.$emit("updateParentActive");
    },
    addStudent() {
      this.$emit("AddNewStudent", this.student);
      this.student = "";
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
