<script setup>
	const userStore = useUserStore();
	const { loginData, isLoggedIn } = storeToRefs(userStore);
	
	 async function onLogOut() {
		 await signOutUser();
		 await navigateTo('/');
	 }
</script>

<template>
	<div class="UserMenu user-menu">
		<client-only v-if="isLoggedIn">
			<div class="user-menu__data">
				<p>{{ loginData.email }}</p>
			</div>
			<div class="user-menu__logout mr-2">
				<v-btn type="submit" @click="onLogOut">LogOut</v-btn>
			</div>
		</client-only>
		<div class="user-menu__login" v-else>
			<v-btn to="login">Login</v-btn>
			<v-btn to="signup">SignUp</v-btn>
		</div>
	</div>
</template>
