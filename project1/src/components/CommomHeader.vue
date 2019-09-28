<template>
    <div class="header" :style="{background:$store.state.color}">
        <span class="shouye">首页</span>
        <span class="title">{{$store.state.title}}</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .header{
        height: 1rem;
        line-height: 1rem;
        background: #f00;
        position:fixed;
        top:0px;
        width: 100%;
        display: flex;
        .title{
            flex:1;
            text-align: center;
            color: white;
        }
    }
    .shouye{
        color: white;
        
    }
</style>