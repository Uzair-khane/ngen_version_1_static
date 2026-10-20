<template>
    <Events />
</template>

<script>
const components = {
    Events: () => import("@/components/insight/events.vue"),
};

export default {
    components,
    head() {
        return {
            title: "News And Events (Next Generation Cirlce)",
        }
    }
};
</script>