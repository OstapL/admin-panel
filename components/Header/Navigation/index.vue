<script setup>
const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(userStore);
</script>

<template>
	<div class="Navigation navigation">
		<ul>
			<li>
				<NuxtLink to="/">Home</NuxtLink>
				<NuxtLink to="admin" v-if="isLoggedIn">Admin panel</NuxtLink>
			</li>
		</ul>
	</div>
</template>
