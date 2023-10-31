<script setup>

const form = ref(null);
const email = ref('');
const password = ref('');
const emailRules = [
	value => {
		if (value?.length > 3) return true
		return 'Email must be at least 3 characters.'
	},]
const passwordRules = [
	value => {
		if (value?.length > 3) return true
		return 'Password must be at least 3 characters.'
	},]

async function onSubmit() {
	const { valid } = await form.value.validate();
	if (valid) await signInUser(email.value, password.value);
}

</script>

<template>
	<h1>Login</h1>
	<v-sheet width="500" class="mx-auto">
		<v-form fast-fail @submit.prevent="onSubmit" ref="form">
			<v-text-field
				v-model="email"
				label="Email"
				:rules="emailRules"
			></v-text-field>
			
			<v-text-field
				v-model="password"
				label="Password"
				:rules="passwordRules"
			></v-text-field>
			
			<v-btn type="submit" block class="mt-2">Submit</v-btn>
		</v-form>
	</v-sheet>
</template>
