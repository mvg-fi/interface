<script lang="ts">
  import PoolTable from "./PoolTable.svelte";
  import SearchPool from "./SearchPool.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="card w-full flex flex-col pt-4 px-2 rounded-2xl bg-base-100">
  <div class="px-3">
    <SearchPool />
  </div>
  <div class="p-3" in:fade>
    <PoolTable />
  </div>
</div>
