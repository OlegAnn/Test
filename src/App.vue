<template>
  <div id="app">
    <p>
      <router-link to="/module">Перейти к Module</router-link>
      <router-link to="/singleton">Перейти к Singleton</router-link>
      <router-link to="/strategy">Перейти к Strategy</router-link>
      <router-link to="/observer">Перейти к Observer</router-link>
      <router-link to="/decorator">Перейти к Decorator</router-link>
    </p>
     <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
p {
  display: flex;
}
a {
  border: 1px solid black;
  color: black;
  text-decoration: none;
  margin-right: 10px;
  padding: 10px;
}
.router-link-active{
  background: rgba($color: #000000, $alpha: .1)
}
</style>
