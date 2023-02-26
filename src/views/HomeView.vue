<script setup lang="ts">
import { db } from "@/firebase";
import { useCollection } from "vuefire";
import { collection } from "firebase/firestore";

const groups = useCollection(collection(db, "group"));
setInterval(()=>{
alert(JSON.stringify(groups));
}, 3000);
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
	{{ groups.length }}        
	<dl>
            <!--bg-white-->
            <div
              v-for="(group, index) in groups"
              :key="group.name"
              class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">
                #{{ index + 1 }}.
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {{ group.name }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>
