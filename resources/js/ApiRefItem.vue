<template>
    <div class="flex flex-col py-3">
        <div class="flex items-center justify-between">
            <div class="flex items-center pb-3">
                <div>{{name}}{{required? '*' : ''}}:</div>
                <input class="mx-3 rounded-lg text-white px-4 py-2 text-sm" type="text" :value="example" disabled>
            </div>
            <div class="bg-primary capitalize px-4 py-2 rounded-full">
                {{type}}
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'api-ref-item',
        
        props: {
            name: String,
            required: Boolean,
            example: {
                type: String,
                default: 'No example...',
            },
            type: String,
        }
    }
</script>