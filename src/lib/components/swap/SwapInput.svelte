<script lang="ts">
  import SelectAssetDialog from "./SelectAsset/SelectAssetDialog.svelte";
  import { selectedFromAsset, selectedToAsset, payAmount, receiveAmount } from "$lib/stores/swap";

  export let from: boolean;
  export let id: string;
  $: icon = from ? $selectedFromAsset?.icon_url : $selectedToAsset.icon_url
  $: symbol = from ? $selectedFromAsset?.symbol : $selectedToAsset.symbol
</script>

<div class="flex">
  <label class="input-group">
    {#if from}
      <input
        type="text"
        placeholder="0"
        bind:value={$payAmount}
        class="input swap-input left input-lg same-height rounded-2xl"
      />
    {:else}
      <input
        type="text"
        placeholder="0"
        bind:value={$receiveAmount}
        class="input swap-input left input-lg same-height rounded-2xl"
      />
    {/if}

    <label for={id} class="btn pl-2 btn-lg select-btn same-height">
      <div class="avatar">
        <div class="rounded-full w-6 mx-2">
          <img src={icon} alt="l" />
        </div>
      </div>
      {symbol}
    </label>
  </label>

  <input type="checkbox" {id} class="modal-toggle" />
  <SelectAssetDialog {from} {id} />
</div>

<style>
  .swap-input {
    border: 2px solid rgb(239 240 249);
    outline: none;
  }
  .select-btn {
    color: black;
    border: 2px solid rgb(239 240 249);
    border-left: none;
    background-color: #ffffff;
  }
  .left {
    border-top-left-radius: 1rem !important;
    border-bottom-left-radius: 1rem !important;
  }
  .same-height {
    height: 64px !important;
  }
</style>