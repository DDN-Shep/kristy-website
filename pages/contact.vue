<template>
  <div class="flex flex-col lg:grid lg:grid-cols-10">
    <div class="lg:col-span-6 mx-auto">
      <UForm :schema="schema"
             :state="state"
             class="space-y-4 space-x-4 w-3xl lg:w-100"
             @submit="onSubmit">
        <UFormField label="Your name"
                    name="name">
          <UInput v-model="state.name"
                  type="text"
                  class="w-full" />
        </UFormField>
        <UFormField label="Your email"
                    name="email"
                    required>
          <UInput v-model="state.email"
                  type="email"
                  class="w-full" />
        </UFormField>
        <UFormField label="Your message..."
                    name="message"
                    required>
          <UTextarea v-model="state.message"
                     class="w-full"
                     :rows="10"
                     autoresize />
        </UFormField>
        <UButton type="submit"
                 label="Send Message" />
      </UForm>
    </div>
    <div class="col-span-4 mx-auto">
      <AboutKris />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as v from 'valibot';
import type { FormSubmitEvent } from '@nuxt/ui';

interface Web3FormsResponse {
  success: boolean
  message: string
}

type Schema = v.InferOutput<typeof schema>
const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  message: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
});

const state = reactive({
  name: '',
  email: '',
  message: ''
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    const response = await $fetch<Web3FormsResponse>('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: {
        access_key: 'd8de2e1c-f3c8-4511-9e02-3518258b3584', // 'c0caa8e6-f21d-4d7a-a0f9-96589ea44770',
        subject: 'Web Site Contact Submission',
        name: state.name,
        email: state.email,
        message: state.message
      }
    });
    toast.add({ title: 'Success', description: response.message ?? 'The form has been submitted.', color: 'success' });
  }
  catch {
    toast.add({ title: 'Error', description: 'There was an issue sending the message.', color: 'error' });
  }
  finally {
    state.name = '';
    state.email = '';
    state.message = '';
  }
};
</script>
