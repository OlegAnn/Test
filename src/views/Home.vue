<template>
  <div class="wrapper">
    <div class="container">
      <div class="option_table">
        <div class="select">
          <div class="select_left">
            <div class="title_select">Country</div>
            <select name="countries" v-model="sortCountry" id="countries">
              <option value="all" :selected='sortCountry'>All countries</option>
              <option v-for="(item) in items" :key="item.index" :value="item.country">{{item.country}}</option>
            </select>
          </div>
          <div class="select_right">
            <div class="title_select">RMC</div>
            <select name="rmcs" v-model="sortRmc" id="rmcs">
              <option value="all" :selected='sortRmc'>All RMC's</option>
              <option v-for="(item) in rmcs" :key="item.index" :value="item.rmc">{{item.rmc}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="table">
        <div class="table_header">
          <div class="col">Country</div>
          <div class="col">Quantity</div>
          <div class="col">RMC</div>
        </div>
        <div class="table_body">
          <div @click="show(item)" v-for="(item) in items" :key="item.index">
            <div class="row" v-if="allView || item.view" :class='{active: activeId === item.index}'>
              <div class="col">
                {{item.country}}
              </div>
              <div class="col">
                {{item.quantity}}
              </div>
              <div class="col">
                {{item.rmc}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PopUp v-if="popUpView" :item='activeObj' @setActiveOrder='setActiveOrder'  @close='popUpView = !popUpView; clearObject()'/>
  </div>
</template>

<script>
import { items } from '@/data/index.js'
import { rmcs } from '@/data/rmcs.js'
import PopUp from '@/components/PopUp/PopUp'
export default {
  name: 'home',
  components: {
    PopUp
  },
  data: function () {
    return {
      sortCountry: localStorage.getItem('activeCountry') || 'all',
      sortRmc: localStorage.getItem('activeRmc') || 'all',
      allView: false,
      items: items,
      rmcs: rmcs,
      popUpView: false,
      activeObj: {},
      activeId: null
    }
  },
  watch: {
    sortCountry (v) {
      localStorage.setItem('activeCountry', v)
      this.filters(v, this.sortRmc)
    },
    sortRmc (v) {
      localStorage.setItem('activeRmc', v)
      this.filters(this.sortCountry, v)
    }
  },
  methods: {
    setActiveOrder (id) {
      this.activeId = id
    },
    sort () {
      this.items = this.items.sort((a, b) => {
        if (a.country < b.country) {return -1}
        if (a.country > b.country) {return 1}
        return 0
      })
    },
    filters (item, lastitem) {
      this.items.map(elem => {
        if (item === 'all' && lastitem === 'all') {
          this.allView = true
        } else {
          this.allView = false
        }
        if ((item === 'all' && lastitem === elem.rmc) || (elem.country === item && elem.rmc === lastitem)) {
          elem.view = true
        } else {
          elem.view = false
        }
        if (item === elem.country && lastitem === 'all') {
          elem.view = true
        }
      })
    },
    show (item) {
      this.popUpView = true
      this.activeObj = item
    },
    clearObject () {
      this.activeObj = {}
    }
  },
  created () {
    this.sort()
    this.filters(this.sortCountry, this.sortRmc)
  }
}
</script>
<style lang="scss">
  body{
    margin: 0;
  }
  .wrapper{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 50%;
    margin: 0 auto;
  }
  .option_table{
    width: 100%;
    margin-bottom: 10px;
  }
  .select{
    display: flex;
    justify-content: space-between;
  }
  .select_left, .select_right{
    display: flex;
  }
  .title_select{
    margin-right: 20px;
  }
  .table{
    display: flex;
    flex-direction: column;
     width: 100%;
  }
  .table_header, .table_body{
    display: flex;
    justify-content: space-between;
    background: #E7E7E7;
  }
  .table_header{
    margin-bottom: 2px;
    .col{
      padding: 10px;
    }
  }
  .table_body{
    flex-direction: column;
    .col{
      padding: 20px 10px;
    }
  }
  .col, .row{
    display: flex;
    flex: 1;
    justify-content: center;
  }
  .row{
    justify-content: space-between;
    transition: .4s;
    cursor: pointer;
    position: relative;
    width: 100%;
    overflow: hidden;
    &::after{
      content: '';
      position: absolute;
      transition: 2s;
      background: rgba($color: #fff, $alpha: .5);
      width: 100%;
    }
    &:hover{
      background: darken(#E7E7E7, 30%);
      color: white;
      &:after{
        content: '';
        top: 0;
        height: 2px;
        padding: 30px;
        width: 100%;
      }
    }
  }
  .active{
    background: green;
    &:hover{
      background: darken(green, 3%);
    }
  }
</style>
