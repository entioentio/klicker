<script setup lang="ts">
import type { PropType } from 'vue';
import useLeague from '@/composables/useLeague';

const props = defineProps({
	leagueName: {
		type: String as PropType<string>,
		required: true,
	},
});

const { matchesTable } = useLeague(props.leagueName);
</script>

<template>
	<h3 class="py-4 text-left text-lg font-medium text-gray-900">
		Matches history
	</h3>
	<table class="w-full">
		<thead class="px-4 py-5">
			<tr>
				<th>
					<h6 class="py-2 text-left font-medium text-gray-600">Winners</h6>
				</th>
				<th />
				<th>
					<h6 class="py-2 text-left font-medium text-gray-600">Losers</h6>
				</th>
				<th>
					<h6 class="py-2 text-left font-medium text-gray-600">Date</h6>
				</th>
			</tr>
		</thead>
		<tbody class="border-t border-gray-200 divide-y divide-gray-200">
			<tr
				v-for="(match, index) in matchesTable"
				:key="match.seconds"
				:class="{ ['bg-gray-100']: index % 2 === 0 }"
			>
				<td
					class="px-2 py-5 text-sm font-medium text-gray-700 whitespace-pre-wrap"
				>
					{{ match.winners.join('\r\n') }}
				</td>
				<td class="px-2 py-5 mt-1 text-sm text-gray-500 sm:col-span-2 sm:mt-0">
					vs.
				</td>
				<td class="py-5 text-sm font-medium text-gray-700 whitespace-pre-wrap">
					{{ match.losers.join('\r\n') }}
				</td>
				<td class="px-2 py-5 mt-1 text-xs text-gray-500 sm:col-span-2 sm:mt-0">
					{{ match.time }}<br />
					{{ match.date }}
				</td>
			</tr>
		</tbody>
	</table>
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
