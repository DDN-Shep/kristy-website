<template>
  <div class="grid grid-cols-10">
    <div class="col-span-6 mx-auto">
      <UForm :schema="schema"
             :state="state"
             class="space-y-4 space-x-4 w-100"
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
    <div class="col-span-4">
      <AboutKris />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as v from 'valibot';
import type { FormSubmitEvent } from '@nuxt/ui';

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
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' });
  state.name = '';
  state.email = '';
  state.message = '';
};
</script>