<script lang="ts" setup>
import {getAllFarms, getSubstrateApi} from "@/polkadotService";

const api = await getSubstrateApi();
const farms = await getAllFarms(api)
</script>

<template>
  <div>
    <pre>{{ farms }}</pre>
  </div>
</template>

<style scoped>

</style>
