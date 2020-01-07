<template>
    <ul>
        <li v-for="l in list" :key="l" @click="handleClick(l)">
            {{l}}
        </li>
    </ul>
</template>

<script>
export default {
  data () {
    return {
      list: ['1111', '2222', '3333', '4444']
    }
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>
