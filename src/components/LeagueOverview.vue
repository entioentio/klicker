<script setup lang="ts">
import type { PropType } from 'vue';
import useLeague from '@/composables/useLeague';
import useRanking from '@/composables/useRanking';

const props = defineProps({
	leagueName: {
		type: String as PropType<string>,
		required: true,
	},
});

const { matches, activePlayers, daysPlayed, averagePerDay } = useLeague(
	props.leagueName
);

const { playersRanking } = useRanking(props.leagueName);
</script>

<template>
	<div class="rounded-lg border-4 border-dashed border-gray-200 px-4 mb-4">
		<h3 class="py-2 text-left font-medium text-gray-900">Stats</h3>
		<table class="w-full">
			<tbody
				class="border-t border-gray-200 text-gray-700 text-md divide-y divide-gray-200"
			>
				<tr>
					<td class="px-2 py-4">Matches played:</td>
					<td class="px-2 py-4 text-gray-900">
						{{ matches.length }}
					</td>
				</tr>
				<tr>
					<td class="px-2 py-4">Active players:</td>
					<td class="px-2 py-4 text-gray-900">
						{{ activePlayers.length }}
					</td>
				</tr>
				<tr>
					<td class="px-2 py-4">Days played:</td>
					<td class="px-2 py-4 text-gray-900">
						{{ daysPlayed }}
					</td>
				</tr>
				<tr>
					<td class="px-2 py-4">Average matches per session:</td>
					<td class="px-2 py-4 text-gray-900">
						{{ averagePerDay }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="rounded-lg border-4 border-dashed border-gray-200 px-4">
		<h3 class="py-2 text-left font-medium text-gray-900">Ranking</h3>
		<table class="w-full">
			<tbody
				class="border-t border-gray-200 text-gray-700 text-md divide-y divide-gray-200"
			>
				<tr v-for="(player, index) in playersRanking">
					<td class="px-2 py-4">
						<template v-if="index < 3">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28">
								<path
									d="M500.79 79.32A45.29 45.29 0 0 0 466.8 64h-43.24q.24-9.54.26-19.2v-.46C423.8 19.77 403.38 0 378.6 0H133.4c-24.78 0-45.2 19.77-45.22 44.34v.46q0 9.67.26 19.2H45.2A45 45 0 0 0 .41 115.06c13.06 95.32 74.27 174.53 157.16 214.77 17.3 26.34 37.09 45.9 58.49 56.86a99.3 99.3 0 0 1-2 10.11 102.64 102.64 0 0 1-57.7 67.78c-.06.06-.13.13-.19.06a24.64 24.64 0 0 0 2 45.89 24 24 0 0 0 8.33 1.47h178.9a24.81 24.81 0 0 0 11.94-46.66c-.77-.38-1.55-.7-2.32-1.09A102.57 102.57 0 0 1 298 396.8a99.27 99.27 0 0 1-2-10.11c21.41-11 41.19-30.53 58.49-56.86 82.89-40.24 144.1-119.45 157.16-214.77a44.85 44.85 0 0 0-10.86-35.74ZM26 111.61a19.38 19.38 0 0 1 4.66-15.45A19.14 19.14 0 0 1 45.2 89.6h44.38c4.59 75.74 20.64 143.94 44.41 196.75C76.69 246.53 36 184.24 26 111.61ZM316.32 165l-14.79 14.86a14.66 14.66 0 0 0-4 12.73l3.49 21c2 11.75-10 20.71-20.24 15.16l-18.28-9.91a13.58 13.58 0 0 0-13 0l-18.28 9.91C221 234.26 209 225.3 211 213.55l3.49-21a14.66 14.66 0 0 0-4-12.73L195.68 165c-8.28-8.32-3.71-22.82 7.73-24.53l20.44-3.06a14 14 0 0 0 10.5-7.87l9.14-19.09a13.77 13.77 0 0 1 25 0l9.14 19.09a14 14 0 0 0 10.5 7.87l20.44 3.06c11.43 1.69 16.03 16.18 7.75 24.53ZM486 111.61c-10 72.63-50.69 134.93-108 174.74 23.77-52.81 39.82-121 44.41-196.75h44.39a19.14 19.14 0 0 1 14.55 6.56 19.38 19.38 0 0 1 4.65 15.45Z"
									:style="`fill: #${ ['f59e0b', 'a8a29e', '7c2d12'][index] }`"
								/>
							</svg>
						</template>
						<template v-else>#{{ index + 1 }}</template>
					</td>
					<td class="px-2 py-4 text-gray-900">
						{{ player.name }}
					</td>
					<td class="px-2 py-4 text-gray-900">
						{{ player.rank }}
					</td>
					<td class="px-2 py-4 text-gray-900 text-center">
						<span class="text-green-700">{{ player.wins }}</span> /
						<span class="text-red-700">{{ player.loses }}</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped>
h1 {
	font-weight: 500;
	font-size: 2.6rem;
	top: -10px;
}

h3 {
	font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
	text-align: center;
}

@media (min-width: 1024px) {
	.greetings h1,
	.greetings h3 {
		text-align: left;
	}
}
</style>
