<!-- 3 -->
<script lang="ts">
  import { _ } from "svelte-i18n";
  import { mode } from "$lib/stores/bridge/process";
  import { formatDecimals } from "$lib/helpers/utils";
  import { payAmount, selectedFromAsset } from "$lib/stores/bridge/bridge";

  const deposit = () => {
    console.log('deposit');
  }
</script>

<div class="view-address text-center p-2 pb-4">
  <span class="text-xl font-bold">
    {$_("bridge.deposit")}
    {formatDecimals(Number($payAmount), 8)}
    {$selectedFromAsset.symbol}
  </span>
</div>

<div>
  <span></span>
</div>

<div class="flex justify-center p-1 gap-2">
  <div class="cancel justify-center p-2">
    <button
      on:click={() => mode.set(0)}
      class="btn bg-base-100 border-2 border-base-200 hover:bg-base-300 hover:border-base-300 rounded-2xl text-opacity-80"
    >
      <span class="text-base-content"> {$_("bridge.back")} </span>
    </button>
  </div>

  <div class="switch-network-btn justify-center p-2">
    <button
      on:click={() => deposit()}
      class="btn bg-blue-700 border-base-200 hover:bg-blue-800 hover:border-base-300 rounded-2xl"
    >
      <span class="text-base-100"> {$_("bridge.confirm")} </span>
    </button>
  </div>
</div>