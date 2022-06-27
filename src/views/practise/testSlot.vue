<template>
    <div>
        <slot>默认展示内容2</slot>
        <slot name="operation">
            <div>展示operation内容2</div>
        </slot>
        <slot name="distance">
            <div>展示distance内容2</div>
        </slot>
    </div>
</template>

<script>
export default {
    name: "growth",
    data() {
        return {

        };
    },
    methods: {
    },
};
</script>

<style lang="scss" scoped>
</style>

