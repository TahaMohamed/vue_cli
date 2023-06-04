<template>
  <div class="slot">
    <h1>Slot Page</h1>
    <keep-alive>
      <app-slot :name="getSlotName" v-if="!isCompTwo">
        <h5>Student slot title from Component 1</h5>
        <p style="color: #42b983">Student slot paragraph</p>
        <input type="text" />
        <template #slotName1>
          <h1 style="color: aqua">Heading from slot first template</h1>
        </template>
        <template #slotName2>
          <h1 style="color: red">Heading from second template</h1>
        </template>
      </app-slot>
    </keep-alive>
    <keep-alive>
      <app-slot2 :name="getSlotName" v-if="isCompTwo">
        <h5>Student slot title from Component 2</h5>
        <p style="color: #42b983">Student slot paragraph</p>
        <input type="text" />
        <template #slotName1>
          <h1 style="color: aqua">Heading from first template</h1>
        </template>
        <template #slotName2>
          <h1 style="color: red">Heading from second template</h1>
        </template>
      </app-slot2>
    </keep-alive>

    <hr />
    <button @click="isCompTwo = !isCompTwo">Toggle Component</button>
  </div>
</template>

<script>
import AppSlot from "@/components/AppSlot.vue";
import AppSlot2 from "@/components/AppSlot.vue";
export default {
  components: {
    AppSlot,
    AppSlot2,
  },
  data() {
    return {
      isCompTwo: false,
    };
  },
  computed: {
    getSlotName() {
      return this.isCompTwo ? "Slot Name 2" : "Slot Name 1";
    },
  },
};
</script>
