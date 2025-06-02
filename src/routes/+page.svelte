<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

</script>

<div>
  <h1 class="text-2xl font-bold text-center mb-4 mt-4">Film</h1>
  <table class="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tahun</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bahasa</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Rilis</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Negara Rilis</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      {#each data.film as film}
        <tr class="hover:bg-gray-50 transition-colors duration-200">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{film.film_judul}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{film.film_tahun}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{film.film_bahasa}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(film.film_tanggal_rilis).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{film.film_negara_rilis}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="flex gap-2 mt-4 px-4">
    {#each Array(Math.ceil(data.totalFilm / 5)) as _, i}
      {#if i + 1 === data.page}
        <a href="/?page={i + 1}" onclick={(e) => e.preventDefault()} class="bg-blue-500 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-600 transition-colors duration-200">
          {i + 1}
        </a>
      {:else}
        <a href="/?page={i + 1}" class="bg-gray-200 text-gray-500 px-4 py-2 text-sm rounded-md hover:bg-gray-300 transition-colors duration-200">
          {i + 1}
        </a>
      {/if}
    {/each}
  </div>
</div>
