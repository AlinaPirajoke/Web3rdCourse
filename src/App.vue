<template>
    <div class="headerRow">
        <h1>Vue</h1>
        <a href="#/photo">Фото</a>
        <a href="#/form">Форма</a>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
}
</script>

<style>
.headerRow {
    color: #12cbd8;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
}

.headerRow a{
    color: #12cbd8;
    font-size: 30px;
    font-weight: 600;
    margin-left: 30px;
}
</style>
