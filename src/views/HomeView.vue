<script setup lang="ts">
import useFirestoreCollection from '@/composables/useFirestoreCollection';

const { groupCollection } = useFirestoreCollection();
</script>

<template>
	<main>
		<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
			<!-- Replace with your content -->
			<div class="overflow-hidden bg-white shadow sm:rounded-lg">
				<div class="px-4 py-5 sm:px-6">
					<h3 class="text-lg font-medium leading-6 text-gray-900">
						Select your league
					</h3>
				</div>
				<div class="border-t border-gray-200">
					<dl>
						<!--bg-white-->
						<RouterLink
							:to="{
								name: 'leagueOverview',
								params: {
									leagueName: group.name,
								},
							}"
							v-for="(group, index) in groupCollection"
							:key="group.name"
							class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 block"
							:class="{ ['bg-gray-100']: index % 2 === 0 }"
						>
							<dt class="text-sm font-medium text-gray-500">
								#{{ index + 1 }}.
							</dt>
							<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								{{ group.name }}
							</dd>
						</RouterLink>
					</dl>
				</div>
			</div>
			<!-- /End replace -->
		</div>
	</main>
</template>
