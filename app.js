const app = Vue.createApp({
  data() {
    return {
      firstName: "chai",
      lastName: "mah",
      email: "chai@gmail.com",
      gender: "male",
      age: "26",
      picture: "https://randomuser.me/api/portraits/men/75.jpg",
    };
  },
  methods: {
    async getUsers() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      //   console.log(results)

      (this.firstName = results[0].name.first),
        (this.lastName = results[0].name.last),
        (this.age = results[0].age),
        (this.email = results[0].email),
        (this.gender = results[0].gender),
        (this.picture = results[0].picture.large);
    },
  },
});

app.mount("#app");
