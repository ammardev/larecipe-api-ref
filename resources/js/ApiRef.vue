<template>
    <div class="bg-black rounded-lg overflow-hidden text-white">
        <header class="flex items-center rounded-lg justify-between bg-primary px-4 py-8 font-3xl border-l-4 border-primary">
            <div class="flex items-center">
                <button class="button p-0 flex items-center justify-center w-8 h-8 bg-white rounded-full" @click="isCollapsed = !isCollapsed">
                    <span class="fa text-primary fa-chevron-right collapse" :class="isCollapsed && 'collapsed'"></span>
                </button>
                <div class="flex flex-col mx-5">
                    <div class="text-white font-bold text-lg pb-2">
                        {{title}}
                    </div>
                    <div class="flex items-center">
                        <span class="font-bold text-xs px-2 py-1 rounded border border-white">
                            {{verb.toUpperCase()}}
                        </span>
                        <span class="mx-2 font-mono text-sm">{{route}}</span>
                    </div>
                </div>
            </div>
            <button class="button bg-white text-primary px-4 py-2 rounded-full text-sm font-bold">
                Try it
            </button>
        </header>
        <main class="px-4 py-4" v-show="!isCollapsed">
            <div class="mx-2" v-if="this.$slots.description">
                <div class="text-lg mb-2">Description</div>
                <slot name="description"></slot>
                <hr>
            </div>
            <div class="mx-2" v-if="this.$slots.body">
                <div class="text-lg mb-2">Body</div>
                <slot name="body"></slot>
                <hr>
            </div>
            <div class="mx-2" v-if="this.$slots.headers">
                <div class="text-lg mb-2">Headers</div>
                <slot name="headers"></slot>
                <hr>
            </div>
            <div v-if="responseCodes">
                <div class="mx-2 text-lg">Responses</div>
                <div class="flex mt-2">
                    <div
                        v-for="responseCode in responseCodes" :key="responseCode"
                        class="px-3 py-1 text-sm font-bold rounded-full mx-2 cursor-pointer"
                        :class="[responseCode == activeResponse? 'bg-primary' : 'border border-primary']"
                        @click="activeResponse = responseCode"
                        >
                        {{responseCode}}
                    </div>
                </div>
                <div class="mt-3 mx-2" v-for="responseCode in responseCodes" :key="responseCode">
                    <slot :name="responseCode" v-if="responseCode == activeResponse"></slot>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'api-ref',

    props: {
        verb: {
            type: String,
            default: 'get',
            validator: (val) => ['get', 'post', 'put', 'patch', 'delete'].includes(val)
        },
        title: {
            type: String,
            required: true
        },
        route: {
            type: String,
            required: true
        },
        responseCodes: {
            type: Array
        }
    },

    data() {
        return {
            activeResponse: this.responseCodes[0] || null,
            isCollapsed: true,
        }
    }
}
</script>

<style scoped>
    .collapse {
        transform: rotate(90deg);
        transition: transform 500ms;
    }

    .collapse.collapsed {
        transform: rotate(0);
    }
</style>