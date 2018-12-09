<template>
  <div class="about">
    <h3 v-if="$mq == 'sm'">Small mq {{mq = $mq}}</h3>
    <h2 v-if="$mq == 'md'">Medium mq {{mq = $mq}}</h2>
    <h1 v-if="$mq == 'lg'">Big mq {{mq = $mq}}</h1>

  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Mq',
  components: {
  },
  data: () => ({
    kek: true,
    mq: 1
  }),
  beforeCreate () {console.log(this.mq, this.$mq , 'Beforecreated')},
  created () {
    console.log(this.mq,this.$mq ,'created')
  },
  beforeMount () {console.log(this.mq,this.$mq ,'BeforeMounted')},
  mounted() {console.log(this.mq,this.$mq ,'mounted')},
  beforeUpdate() {console.log(this.mq,this.$mq ,'beforeUpdate')},
  updated() {console.log(this.mq,this.$mq ,'updated')},
  beforeDestroy(){
    console.log(this.mq,this.$mq ,'beforeDestroy')
  },
  destroyed() {console.log(this.mq,this.$mq ,'destroyed')}
  
}
</script>
<style>
  h1{
    cursor: pointer;
  }
</style>
