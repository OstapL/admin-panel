<script setup>
 async function onLogOut() {
	 await signOutUser();
	 await navigateTo('/');
 }
</script>

<template>
	<div class="UserMenu user-menu">
		<div class="user-menu__logout mr-2">
			<v-btn type="submit" @click="onLogOut">LogOut</v-btn>
		</div>
	</div>
</template>
