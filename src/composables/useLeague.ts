import { computed } from 'vue';
import useFirestoreCollection from '@/composables/useFirestoreCollection';

export default (leagueName: string) => {
	const { matchCollection } = useFirestoreCollection();

	const matches = computed(() => {
		return matchCollection.value.filter((m) => m.group === leagueName);
	});

	const activePlayers = computed(() =>
		Array.from(
			matches.value.reduce((accumulator, value) => {
				value.winners.forEach((u) => accumulator.add(u));
				value.losers.forEach((u) => accumulator.add(u));
				return accumulator;
			}, new Set<string>())
		)
	);

	const activePlayersWithMatches = computed(() =>
		activePlayers.value.map((player) => ({
			name: player,
			wins: matches.value.filter((m) => m.winners.includes(player)).length,
			loses: matches.value.filter((m) => m.losers.includes(player)).length,
		}))
	);

	const matchesTable = computed(() =>
		matches.value
			.sort((a, b) => a.data.seconds - b.data.seconds)
			.map((m) => {
				const date = new Date(m.data.seconds * 1000);

				return {
					...m,
					dateKey: date.toLocaleDateString(),
					date: date.toLocaleDateString([], {
						year: '2-digit',
						month: 'short',
					}),
					time: date.toLocaleTimeString([], {
						hour: '2-digit',
						minute: '2-digit',
					}),
				};
			})
	);

	const daysPlayed = computed(
		() =>
			Array.from(
				matchesTable.value.reduce((accumulator, value) => {
					accumulator.add(value.dateKey);

					return accumulator;
				}, new Set<string>())
			).length
	);

	const averagePerDay = computed(
		() => Math.round((matches.value.length * 10) / daysPlayed.value) / 10
	);

	return {
		matches,
		matchesTable,
		activePlayers,
		daysPlayed,
		averagePerDay,
		activePlayersWithMatches,
	};
};
