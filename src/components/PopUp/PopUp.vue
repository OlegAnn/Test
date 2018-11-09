<template>
  <div class="">
    <div class="wrapper_popUp">
      <div class="pop_up">
        <div class="first_part">
          <div class="header">Confirmation</div>
          <div class="body">
            <div class="text">
              <span class="kruk">Are you sure that your order will include:</span> <br><br>
              Watches with RMC: 
              {{showRMC(item.rmc, item.quantity)}}
            </div>
          </div>
        </div>
        <div class="last_part" @click="$emit('close')">
          <div class="cancel" @click="$emit('setActiveOrder', null)">Cancel</div>
          <div class="confirm" @click="$emit('setActiveOrder', item.index)">Yes</div>
        </div>
      </div>
      
    </div>
    <div class="overlay" @click="$emit('close')"></div>
  </div>
</template>

<script>
import { items } from '@/data/index.js'
import { rmcs } from '@/data/rmcs.js'
export default {
  name: 'PopUp',
  props: {
    item: {
      type: Object
    }
  },
  data: function () {
    return {
      toggle: true,
      items: items,
      rmcs: rmcs
    }
  },
  methods: {
    showRMC(rmc, quantity) {
      let foo = ''
      this.rmcs.map(item => {
        if (item.rmc === rmc) {
          foo = `${rmc} with price $${item.priceForOne * quantity}?`
        }
      })
      return foo
    }
  }
}
</script>
<style lang="scss">
  .wrapper_popUp{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 3;
    box-shadow: 0 8px 30px 0 rgba(0,0,0,.12);
  }
  .overlay{
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: .2)
  }
  .pop_up{
    display: flex;
    flex-direction: column;
    z-index: 3;
    background: white;
    position: relative;
  }
  .first_part{
    padding: 30px;
    .header{
      padding-bottom: 20px;
      font-weight: 700;
    }
    .body{
      .text{
        font-weight: 500;
        .kruk{
          margin-bottom: 20px;
          font-weight: 500;
        }
      }
    }
  }
  .last_part{
    display: flex;
    border-top: 3px solid black;
    div{
      width: 50%;
      padding: 20px;
      cursor: pointer;
      transition: background .4s;
      box-shadow: 0 8px 30px 0 rgba(0,0,0,.12);
    }
    .confirm{
      border-left: 3px solid black;
      &:hover{
        background: green;
        color: white;
      }
    }
    .cancel{
      &:hover{
        background: red;
        color: white;
      }
    }
  }
</style>
