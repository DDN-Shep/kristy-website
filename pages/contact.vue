<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  message: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
})

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  name: '',
  email: '',
  password: ''
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
}
</script>

<template>
  <UCard>
    <template #header>
      <Placeholder class="h-8" />
    </template>

    <UForm :schema="schema"
           :state="state"
           class="space-y-4"
           @submit="onSubmit">
      <UFormField label="Your name"
                  name="name">
        <UInput v-model="state.name"
                type="text" />
      </UFormField>
      <UFormField label="Your email"
                  name="email">
        <UInput v-model="state.email" />
      </UFormField>
      <UFormField label="Your message..."
                  name="message">
        <UTextarea autoresize
                   v-model="state.message" />
      </UFormField>
      <UButton type="submit">
        Submit
      </UButton>
    </UForm>

    <template #footer>
      <Placeholder class="h-8" />
    </template>
  </UCard>
</template>