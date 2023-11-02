<script setup>
	const data = useAsyncData('messages', () => getCollectionList('messages'));
	const result = await data.then(result => result.data);
</script>

<template>
    <h1>Home Page</h1>
		<ul>
			<li v-for="item in result">{{ item }}</li>
		</ul>
	<v-btn @click.prevent="deleteCollection('messages', 'GP6pKRacdJKK0qbFmVU7')">Add</v-btn>
</template>
