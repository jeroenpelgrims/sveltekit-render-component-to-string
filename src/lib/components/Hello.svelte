<script lang="ts">
export let name: string;
</script>

<div>
Hello, <strong>{name}</strong>!
</div>

<style lang="scss">
strong {
  color: red;
}
div {
  border: 1px solid green;
}
</style>