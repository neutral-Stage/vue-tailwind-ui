<template>
  <div>
    <ul>
      <li class="my-4" v-for="l in links" :key="l">
        <a class="hover-indigo-translate" :href="l.link"
          >{{ l.title }} - {{ l.link }}</a
        >
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Awesome Tailwind",
          link: "https://github.com/aniftyco/awesome-tailwindcss",
        },
        {
          title: "Awesome Tailwind",
          link: "https://github.com/aniftyco/awesome-tailwindcss",
        },
      ],
    };
  },
};
</script>