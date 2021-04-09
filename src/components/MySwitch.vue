<template>
    <label class="my-switch">
        <input type="checkbox" :checked="value" :name="name" @change="$emit('change', $event.target.checked)">
        <span class="switch-bg"></span>
        <span class="label first">{{ label }}</span>
        <span class="check-item"></span>
        <span class="label last">{{ label }}</span>
    </label>
</template>

<script>
export default {
    name: "MySwitch",
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: {
            type: Boolean,
            required: true,
        },
        name: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: false,
        },
    },
}
</script>