<script lang="ts">
import type { PageData } from "./$types";
export let data: PageData;
</script>

<main>
    This is the string value of the rendered Hello component:
    <pre>{data.stringValue}</pre>

    And the actual rendered html:
    {@html data.stringValue}
</main>