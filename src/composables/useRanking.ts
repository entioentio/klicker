import axios from 'axios';
import { computed, ref } from 'vue';
import useLeague from './useLeague';

export type TRanking = {
	mu: number;
	rank: number;
	sigma: number;
	user: string;
};

export default (leagueName: string) => {
	const rankingUrl = `https://keeker.netlify.app/api/ranking?group=${leagueName}`;
	const ranking = ref<TRanking[]>([]);

	const { activePlayersWithMatches } = useLeague(leagueName);

	async function getRanking() {
		try {
			const { data } = await axios.get(rankingUrl);
			ranking.value = data;
		} catch (e) {
			return Promise.reject(e);
		}

		return Promise.resolve(ranking.value);
	}

	const playersRanking = computed(() =>
		activePlayersWithMatches.value.map((p) => ({
			...p,
			rank:
				ranking.value
					.find((entry) => entry.user === p.name)
					?.rank?.toFixed(1) ?? '?',
		})).sort((a, b) => b.rank - a.rank)
	);

	getRanking();

	return {
		ranking,
		getRanking,
		playersRanking,
	};
};
