<template>
    <div>
        <div id="mount-point"></div>
        <div id="app">
            <router-view/>
        </div>
    </div>

</template>

<script>

export default {
  name: 'App',
  components: {

  },

    data(){
      return{

      }
    }
}



</script>

<style lang="scss">
    *{
        padding: 0;
        margin: 0;
    }

    #app{
        background: #f7f8fa;
    }

    article{

        h1{
            margin-bottom: 20px;
        }

        pre{
            position: relative;
            display: block;
            padding: 16px;
            overflow-x: auto;
            color: #58727e;
            font-weight: 400;
            font-size: 14px;
            font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
            line-height: 26px;
            white-space: pre-wrap;
            word-wrap: break-word;
            background-color: #fff;
            border-radius: 16px;
        }
    }


</style>
