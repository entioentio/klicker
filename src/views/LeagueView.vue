<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
	leagueName: {
		type: String as PropType<string>,
		required: true,
	},
});
</script>

<template>
	<header class="sticky top-0">
		<div class="bg-white shadow z-10 relative">
			<div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
				<h1 class="text-2xl tracking-tight text-gray-900">
					League:<p class="font-bold text-3xl">{{ leagueName }}</p>
				</h1>
			</div>
		</div>
		<div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 bg-gray-100">
			<div class="flex h-4 items-center justify-between">
				<div class="flex items-center">
					<div class="flex items-baseline space-x-2">
						<RouterLink
							:to="{ name: 'leagueOverview' }"
							class="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
							exact-active-class="bg-white shadow-sm ring-1 ring-inset ring-gray-300"
							>Overview</RouterLink
						>
						<RouterLink
							:to="{ name: 'leagueHistory' }"
							class="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
							exact-active-class="bg-white shadow-sm ring-1 ring-inset ring-gray-300"
							>History</RouterLink
						>
					</div>
				</div>
			</div>
		</div>
	</header>
	<main class="pb-20">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<!-- Replace with your content -->
			<div class="px-4 py-6 sm:px-0">
				<RouterView />
			</div>
			<!-- /End replace -->
		</div>
		<RouterLink to="/" class="fixed bottom-3 right-3 p-0 w-16 h-16">
			<button
				class="p-0 w-16 h-16 bg-sky-900 rounded-full hover:bg-sky-500 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
			>
				<svg
					viewBox="0 0 20 20"
					enable-background="new 0 0 20 20"
					class="w-6 h-6 inline-block"
				>
					<path
						fill="#FFFFFF"
						d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
										C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
										C15.952,9,16,9.447,16,10z"
					></path>
				</svg>
			</button>
		</RouterLink>
	</main>
</template>
