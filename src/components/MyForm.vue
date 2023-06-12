<template>
  <div class="my-form">
    <form action="" @submit.prevent="addStudent">
      <div>
        <label for="">First Name</label>
        <input type="text" v-model.lazy="student.firstName" />
      </div>

      <div>
        <label for="">Last Name</label>
        <input type="text" v-model.trim="student.lastName" />
      </div>

      <div>
        <label for="">Age</label>
        <input type="text" v-model="student.age" />
      </div>

      <div>
        <label for="">Email</label>
        <input type="text" v-model="student.email" />
      </div>

      <div>
        <h3>Favourite Sports</h3>
        <label for="tennis">Tennis</label>
        <input type="checkbox" v-model="student.sports.tennis" id="tennis" />

        <label for="football">Football</label>
        <input
          type="checkbox"
          v-model="student.sports.football"
          id="football"
        />

        <label for="basketball">Basket ball</label>
        <input
          type="checkbox"
          v-model="student.sports.basketball"
          id="basketball"
        />
      </div>
      <div>
        <h3>Gender</h3>
        <label for="male">Male</label>
        <input
          type="radio"
          v-model="student.gender"
          value="male"
          name="gender"
          id="male"
        />
        <label for="female">Female</label>
        <input
          type="radio"
          v-model="student.gender"
          name="gender"
          value="female"
          id="female"
        />
      </div>

      <div>
        <label for="bio">Bio</label>
        <textarea v-model="student.bio" id="bio"></textarea>
      </div>

      <div>
        <label for="grade">Grade</label>
        <select id="grade" v-model="student.grade">
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
          <option value="four">Four</option>
        </select>
      </div>

      <div class="actions">
        <input type="submit" />
      </div>
    </form>
    <ul>
      <li v-for="(std, index) in students" :key="index">
        {{ std.firstName + " " + std.lastName }}
        <ol>
          <li v-for="(sport, key, index) in std.sports" :key="index">
            <p v-if="sport">{{ key }}</p>
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  data() {
    return {
      students: [],
      student: {
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        grade: "",
        gender: "",
        bio: "",
        sports: {
          tennis: false,
          football: false,
          basketball: false,
        },
      },
    };
  },
  methods: {
    addStudent() {
      this.students.push(this.student);
      this.student = {
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        grade: "",
        gender: "",
        bio: "",
        sports: {
          tennis: false,
          football: false,
          basketball: false,
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.my-form {
  form {
    display: flex;
    flex-wrap: wrap;
    div {
      width: 40%;
    }
    .actions {
      width: 100%;
      input {
        width: 50%;
      }
    }
  }
}
</style>
